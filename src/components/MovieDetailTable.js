import React from 'react';
import { Table, TableBody, TableRow, TableContainer } from '@material-ui/core';
import PropTypes from 'prop-types';
import NoBorderCell from './NoBorderCell';

// TODO: Add Styling
function MovieDetailTable({
  rated,
  director,
  writer,
  released,
  country,
  language,
  awards,
}) {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <NoBorderCell>Rating</NoBorderCell>
            <NoBorderCell>{rated}</NoBorderCell>
          </TableRow>
          <TableRow>
            <NoBorderCell>Directed By</NoBorderCell>
            <NoBorderCell>{director}</NoBorderCell>
          </TableRow>
          <TableRow>
            <NoBorderCell>Written By</NoBorderCell>
            <NoBorderCell>{writer}</NoBorderCell>
          </TableRow>
          <TableRow>
            <NoBorderCell>Release Date</NoBorderCell>
            <NoBorderCell>
              {released}
              in
              {country}
            </NoBorderCell>
          </TableRow>
          <TableRow>
            <NoBorderCell>Language</NoBorderCell>
            <NoBorderCell>{language}</NoBorderCell>
          </TableRow>
          <TableRow>
            <NoBorderCell>Awards</NoBorderCell>
            <NoBorderCell>{awards}</NoBorderCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default MovieDetailTable;

MovieDetailTable.propTypes = {
  rated: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  awards: PropTypes.string.isRequired,
};
