# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código de la aplicación
COPY . .

# Expone el puerto en el que corre tu app (ajústalo si es necesario)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/index.js"]