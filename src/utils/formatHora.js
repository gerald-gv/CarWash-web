export const formatHora = (horaStr) => {

    const date = new Date(`1970-01-01T${horaStr}`);
    
    return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
};