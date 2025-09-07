# INSTEC - Ingeniería e Inspecciones Técnicas

Sitio web corporativo para INSTEC, empresa chilena especializada en ensayos no destructivos y control de calidad.

## 🚀 Despliegue en Netlify

### Configuración de Build Settings:

- **Repository**: Conectar a tu repositorio de GitHub
- **Branch to deploy**: `main`
- **Base directory**: `crypgo/package`
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Functions directory**: `netlify/functions` (opcional)

### Variables de Entorno (Environment Variables):
```
NODE_VERSION=18
```

## 📁 Estructura del Proyecto

```
INSTEC_WEB/
├── crypgo/
│   └── package/          # Aplicación Next.js
│       ├── src/
│       ├── public/
│       ├── package.json
│       ├── next.config.js
│       └── out/          # Build output (después del build)
├── netlify.toml          # Configuración de Netlify
└── README.md
```

## 🛠️ Desarrollo Local

```bash
cd crypgo/package
npm install
npm run dev
```

## 📦 Build para Producción

```bash
cd crypgo/package
npm run build
```

## 🎨 Características

- ✅ Carrusel interactivo de clientes
- ✅ Diseño responsivo
- ✅ Optimizado para SEO
- ✅ Static export para Netlify
- ✅ Empresa chilena - 14 clientes activos
- ✅ Información actualizada para Chile

## 🌐 GitHub + Netlify

1. Sube el proyecto a GitHub
2. Conecta el repositorio en Netlify
3. Usa la configuración de build settings de arriba
4. ¡Deploy automático!