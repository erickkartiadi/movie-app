import React from 'react';
import { TableBody, TableContainer } from '@material-ui/core';
import PropTypes from 'prop-types';
import { CustomCell, CustomRow, CustomTable } from '../../CustomTables';

function MovieDetailTable({
  genre,
  runtime,
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
      <CustomTable>
        <TableBody>
          <CustomRow>
            <CustomCell>Rated</CustomCell>
            <CustomCell>{rated}</CustomCell>
          </CustomRow>
          <CustomRow>
            <CustomCell>Genre</CustomCell>
            <CustomCell>{genre}</CustomCell>
          </CustomRow>
          <CustomRow>
            <CustomCell>Directed By</CustomCell>
            <CustomCell>{director}</CustomCell>
          </CustomRow>
          <CustomRow>
            <CustomCell>Release Date</CustomCell>
            <CustomCell>{`${released} in ${country}`}</CustomCell>
          </CustomRow>
          <CustomRow>
            <CustomCell>Runtime</CustomCell>
            <CustomCell>{runtime}</CustomCell>
          </CustomRow>
          <CustomRow>
            <CustomCell>Language</CustomCell>
            <CustomCell>{language}</CustomCell>
          </CustomRow>
          <CustomRow>
            <CustomCell>Awards</CustomCell>
            <CustomCell>{awards}</CustomCell>
          </CustomRow>
          <CustomRow>
            <CustomCell>Written By</CustomCell>
            <CustomCell>{writer}</CustomCell>
          </CustomRow>
        </TableBody>
      </CustomTable>
    </TableContainer>
  );
}
export default MovieDetailTable;

MovieDetailTable.propTypes = {
  rated: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  awards: PropTypes.string.isRequired,
};
