const express =require('express')
const cors = require('cors')

const promBundle = require('express-prom-bundle');
const metricsMiddleware = promBundle({ includeMethod: true, includePath: true });
const { register, collectDefaultMetrics, Histogram } = require('prom-client');

const { 
    usuarioRoutes,
    recetaRoutes,
    rutinaRoutes,
    detalleUsuarioRecetaRoute,
} = require('./src/routes')

const app = express();

//Directorio publico
app.use(express.static('public'));

//cors
app.use(cors())

//Lectura de body
app.use(express.json())

//RUTAS
app.use('/api/usuario', usuarioRoutes);
app.use("/api/receta", recetaRoutes);
app.use("/api/rutina", rutinaRoutes);
app.use("/api/detalleUsuarioReceta", detalleUsuarioRecetaRoute);

app.use(metricsMiddleware);
 
const httpRequestDurationMicroseconds = new Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['route', 'method', 'status'],
  buckets: [0.1, 5, 15, 50, 100, 500]
});
 
register.registerMetric(httpRequestDurationMicroseconds);
 
collectDefaultMetrics({ register });
 
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const end = Date.now();
    const duration = end - start;
    const route = req.route ? req.route.path : req.path;
    httpRequestDurationMicroseconds
      .labels(route, req.method, res.statusCode)
      .observe(duration);
  });
  next();
});
 
app.get('/metrics', (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(register.metrics());
});


module.exports = app;