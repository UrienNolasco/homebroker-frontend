import { OrderStatus } from "@/models";
import { Badge } from "flowbite-react";

const OrderStatusBadge = (props: {status: OrderStatus}) => {
    let color: string;
    let text: string;

    switch (props.status) {
        case OrderStatus.PENDING:
            color = "info";
            text = "Pendente";
            break;
        case OrderStatus.OPEN:
            color = "warning";
            text = "Aberto";
            break;
        case OrderStatus.CLOSED:
            color = "success";
            text = "Fechado";
            break;
        case OrderStatus.FAILED:
            color = "failure";
            text = "Falhou";
            break;
    } 
    return ( 
        <Badge color={color} className="w-fit" size="xs">
            {text}
        </Badge>
     );
}
 
export default OrderStatusBadge;