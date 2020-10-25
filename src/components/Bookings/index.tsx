import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';

// Generate Order Data
function createData(
  id: number,
  name: string,
  guests: number,
  room: string,
  notes: string,
  checkin: string,
  checkout: string,
  total: string,
) {
  return { id, name, guests, room, notes, checkin, checkout, total };
}

const rows = [
  createData(123456, 'Elvis Presley', 3, 'Suíte 3', '', '16 Mar, 2019', '21 Mar, 2019', 'R$ 400,00'),
  createData(234654, 'John Lennon', 4, 'Suíte 1', '', '22 Mar, 2019', '26 Mar, 2019', 'R$ 600,00'),
  createData(432876, 'BB King', 2, 'Suíte 13', 'Carrinho de Bebê', '26 Mar, 2019', '28 Mar, 2019', 'R$ 500,00'),
];

function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Bookings() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Reservas
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Reserva</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Hóspedes</TableCell>
            <TableCell>Quarto</TableCell>
            <TableCell>Observações</TableCell>
            <TableCell>Check-in</TableCell>
            <TableCell>Check-out</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.guests}</TableCell>
              <TableCell>{row.room}</TableCell>
              <TableCell>{row.notes}</TableCell>
              <TableCell>{row.checkin}</TableCell>
              <TableCell>{row.checkout}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver mais reservas
        </Link>
      </div>
    </React.Fragment>
  );
}