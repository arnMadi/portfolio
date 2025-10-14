'use client'; 

import { MoonIcon } from "lucide-react"
import { SunIcon } from "lucide-react"
import { ToggleLeftIcon } from "lucide-react"

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // 1. Définir l'état initial sur 'systeme' ou 'light' par défaut
  const [theme, setTheme] = useState('light'); 

  // 2. Détecter la préférence système et la préférence enregistrée au montage
  useEffect(() => {
    // Récupérer le thème enregistré (ou utiliser la préférence système)
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Déterminer le thème initial
    const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

  }, []);

  // 3. Appliquer la classe 'dark' à l'élément <html>
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Affichage (utiliser un logo "Arndev" ou une icône)
  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer p-2 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700"
      aria-label="Basculer entre le mode clair et le mode sombre"
    >
      {/* Afficher une icône de soleil en mode sombre et de lune en mode clair */}
      {theme === 'dark' ? <div className="flex flex-row gap-2 p-1"> <SunIcon/> <p>Light mode</p> </div>  :<div className="gap-2 flex flex-row p-1"> <MoonIcon/> <p>Dark mode</p></div>} 
    </button>
  );
};

export default ThemeToggle;