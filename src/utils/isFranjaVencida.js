export const isFranjaVencida = (horaFin) => {

  const ahora = new Date();
  const [horas, minutos] = horaFin.split(":").map(Number);

  const fin = new Date(ahora);
  fin.setHours(horas, minutos, 0, 0);
  
  return ahora > fin;
};
