import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle } from "lucide-react";

export const getEstadoBadge = (estado) => {
  switch (estado) {
    case "pendiente":
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
          <AlertCircle className="w-3 h-3 mr-1" />
          Pendiente
        </Badge>
      );
    case "culminada":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          <CheckCircle className="w-3 h-3 mr-1" />
          Culminada
        </Badge>
      );
    default:
      return (
        <Badge variant="secondary">
          <AlertCircle className="w-3 h-3 mr-1" />
          Desconocido...
        </Badge>
      );
  }
};
