export const isFranjaVencida = (horaFin) => {
    
  const ahora = new Date();
  const fin = new Date(`1970-01-01T${horaFin}`);
  return ahora > fin;
};
