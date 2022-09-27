import prisma from "./prisma";

export const getAllTickets = async () => {
  const tickets = await prisma.ticket.findMany({});
  return tickets;
};

export const getTicketbyId = async (id) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: Number(id) },
  });
  return ticket;
};
export const getTicketbyAssign = async (assignedTo) => {
  const ticket = await prisma.ticket.findMany({
    where: { assignedTo: assignedTo },
  });
  return ticket;
};

export const createTicket = async (
  createdBy,
  assignedTo,
  status,
  priority,
  product,
  description
) => {
  const ticket = await prisma.ticket.create({
    data: {
      createdBy,
      assignedTo,
      status,
      priority,
      product,
      description,
    },
  });
  return ticket;
};

export const updateTicket = async (
  id,
  assignedTo,
  status,
  priority,
  product,
  description
) => {
  const ticket = await prisma.ticket.update({
    where: {
      id,
    },
    data: {
      assignedTo,
      status,
      priority,
      product,
      description,
    },
  });
  return ticket;
};

export const deleteTicket = async (id) => {
  const ticket = await prisma.ticket.delete({
    where: {
      id,
    },
  });
  return ticket;
};
