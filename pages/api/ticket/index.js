import {
  createTicket,
  deleteTicket,
  getAllTickets,
  getTicketbyId,
  getTicketbyAssign,
  updateTicket,
} from "../../../prisma/ticket";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          // Get a single ticket if id is provided is the query
          // api/tickets?id=1
          const ticket = await getTicketbyId(req.query.id);
          return res.status(200).json(ticket);
        }
        if (req.query.assignedTo) {
          const ticket = await getTicketbyAssign(req.query.assignedTo);
          return res.status(200).json(ticket);
        } else {
          // Otherwise, fetch all tickets
          const tickets = await getAllTickets();
          return res.json(tickets);
        }
      }
      case "POST": {
        // Create a new ticket
        const {
          createdBy,
          assignedTo,
          status,
          priority,
          product,
          description,
        } = req.body;
        const ticket = await createTicket(
          createdBy,
          assignedTo,
          status,
          priority,
          product,
          description
        );
        return res.json(ticket);
      }
      case "PUT": {
        // Update an existing ticket
        const { id, assignedTo, status, priority, product, description } =
          req.body;
        const ticket = await updateTicket(
          id,
          assignedTo,
          status,
          priority,
          product,
          description
        );
        return res.json(ticket);
      }
      case "DELETE": {
        // Delete an existing ticket
        const { id } = req.body;
        const ticket = await deleteTicket(id);
        return res.json(ticket);
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
