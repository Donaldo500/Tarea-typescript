# Tarea TypeScript - Calculadora de edad

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Ejercicio de introducción a **TypeScript**: una función tipada que calcula la edad de una persona a partir de su fecha de nacimiento, compilada con una configuración estricta del compilador.

## Descripción

La función `age(day, month, year)` compara la fecha de nacimiento con una fecha de referencia (`today`) y descuenta un año si el cumpleaños todavía no ha ocurrido.

Conceptos practicados:

- Tipado de parámetros y valor de retorno (`(day: number, month: number, year: number): number`).
- Arreglos tipados (`number[]`).
- Aserciones de tipo (`as number`) necesarias por la opción `noUncheckedIndexedAccess`.
- Configuración de `tsconfig.json` con `strict`, `exactOptionalPropertyTypes`, `sourceMap` y generación de declaraciones (`declaration`).
- Plantillas de texto (*template literals*).

## Tecnologías utilizadas

- TypeScript 5.9
- Node.js
- npm

## Estructura del proyecto

```text
Tarea-typescript/
├── package.json
└── js/
    ├── app.ts          # Código fuente
    ├── app.js          # Código compilado
    └── tsconfig.json   # Configuración del compilador
```

## Instalación y uso

```bash
git clone https://github.com/Donaldo500/Tarea-typescript.git
cd Tarea-typescript
npm install
npx tsc -p js
node js/app.js
```

## Ejemplo de uso

```ts
const today: number[] = [14, 8, 2025]; // día, mes, año de referencia

console.log(`Tu edad es de: ${age(12, 1, 2010)} años`);
```

Salida:

```text
Tu edad es de: 15 años
```

Para calcular otra edad, cambia los argumentos de `age(día, mes, año)` o actualiza el arreglo `today` con la fecha actual y vuelve a compilar.

## Contribuciones

Proyecto individual de práctica. Las sugerencias son bienvenidas mediante issues o pull requests.

## Autor

**Donaldo Ibarra** - [@Donaldo500](https://github.com/Donaldo500)
