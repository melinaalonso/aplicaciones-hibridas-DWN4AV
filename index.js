import esPrimo from './esm.mjs';
import dotenv from 'dotenv';
dotenv.config();

const numero = process.env.NUMERO_PRUEBA;
console.log(`¿Es ${numero} un número primo? ${esPrimo(Number(numero))}`);