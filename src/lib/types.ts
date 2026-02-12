// Tipos del sistema
export interface Usuario {
  id: string;
  username: string;
  password: string;
  nombre: string;
  telefono: string;
  rol: 'admin' | 'veterinario';
  veterinariaId: string;
}

export interface Veterinaria {
  id: string;
  nombre: string;
  direccion: string;
  telefono: string;
}

export interface Cliente {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
  direccion: string;
  veterinariaId: string;
  fechaRegistro: string;
}

export interface Mascota {
  id: string;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  clienteId: string;
  veterinariaId: string;
  observaciones: string;
}

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: 'Alimento' | 'Higiene' | 'Juguetes' | 'Medicamentos' | 'Accesorios' | 'Otro';
  especiesRecomendadas: string[]; // ['Perro', 'Gato', 'Ave', etc.] - vacío significa para todas
  veterinariaId: string;
}
