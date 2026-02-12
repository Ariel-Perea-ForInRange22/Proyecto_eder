// Sistema de autenticación
import type { Usuario } from './types';
import { storage } from './storage';

export class Auth {
  private static SESSION_KEY = 'vet_session';

  static login(username: string, password: string): Usuario | null {
    const usuarios = storage.getUsuarios();
    const usuario = usuarios.find(
      u => u.username === username && u.password === password
    );
    
    if (usuario) {
      this.setSession(usuario);
      return usuario;
    }
    return null;
  }

  static register(data: Omit<Usuario, 'id'>): Usuario {
    const newUsuario: Usuario = {
      ...data,
      id: `user-${Date.now()}`
    };
    storage.saveUsuario(newUsuario);
    this.setSession(newUsuario);
    return newUsuario;
  }

  static logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.SESSION_KEY);
    }
  }

  static getSession(): Usuario | null {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem(this.SESSION_KEY);
    return data ? JSON.parse(data) : null;
  }

  static setSession(usuario: Usuario) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(usuario));
    }
  }

  static isAuthenticated(): boolean {
    return this.getSession() !== null;
  }
}
