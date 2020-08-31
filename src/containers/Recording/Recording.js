import React, {Component} from 'react'
import {FormattedMessage} from "react-intl";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';

import './Recording.css'
import PopupWrapper from "../../hoc/PopupWrapper/PopupWrapper";
import AddRecordingPopup from "../../components/ModalPopups/AddRecordingPopup/AddRecordingPopup";

class Recording extends Component {

  state = {
    isOpen: false,
  }


  addRecordingHandle = () => {
    this.setState({
      isOpen: true
    })
  }
  closePopupAddRecording = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    const top100Films = [
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Godfather: Part II', year: 1974 },
      { title: 'The Dark Knight', year: 2008 },
      { title: '12 Angry Men', year: 1957 },
      { title: "Schindler's List", year: 1993 },
      { title: 'Pulp Fiction', year: 1994 },
      { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
      { title: 'The Good, the Bad and the Ugly', year: 1966 },
      { title: 'Fight Club', year: 1999 },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
      { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
      { title: 'Forrest Gump', year: 1994 },
      { title: 'Inception', year: 2010 },
      { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
      { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
      { title: 'Goodfellas', year: 1990 },
      { title: 'The Matrix', year: 1999 },
      { title: 'Seven Samurai', year: 1954 },
      { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
      { title: 'City of God', year: 2002 },
      { title: 'Se7en', year: 1995 },
      { title: 'The Silence of the Lambs', year: 1991 },
      { title: "It's a Wonderful Life", year: 1946 },
      { title: 'Life Is Beautiful', year: 1997 },
      { title: 'The Usual Suspects', year: 1995 },
      { title: 'Léon: The Professional', year: 1994 },
      { title: 'Spirited Away', year: 2001 },
      { title: 'Saving Private Ryan', year: 1998 },
      { title: 'Once Upon a Time in the West', year: 1968 },
      { title: 'American History X', year: 1998 },
      { title: 'Interstellar', year: 2014 },
      { title: 'Casablanca', year: 1942 },
      { title: 'City Lights', year: 1931 },
      { title: 'Psycho', year: 1960 },
      { title: 'The Green Mile', year: 1999 },
      { title: 'The Intouchables', year: 2011 },
      { title: 'Modern Times', year: 1936 },
      { title: 'Raiders of the Lost Ark', year: 1981 },
      { title: 'Rear Window', year: 1954 },
      { title: 'The Pianist', year: 2002 },
      { title: 'The Departed', year: 2006 },
      { title: 'Terminator 2: Judgment Day', year: 1991 },
      { title: 'Back to the Future', year: 1985 },
      { title: 'Whiplash', year: 2014 },
      { title: 'Gladiator', year: 2000 },
      { title: 'Memento', year: 2000 },
      { title: 'The Prestige', year: 2006 },
      { title: 'The Lion King', year: 1994 },
      { title: 'Apocalypse Now', year: 1979 },
      { title: 'Alien', year: 1979 },
      { title: 'Sunset Boulevard', year: 1950 },
      { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
      { title: 'The Great Dictator', year: 1940 },
      { title: 'Cinema Paradiso', year: 1988 },
      { title: 'The Lives of Others', year: 2006 },
      { title: 'Grave of the Fireflies', year: 1988 },
      { title: 'Paths of Glory', year: 1957 },
      { title: 'Django Unchained', year: 2012 },
      { title: 'The Shining', year: 1980 },
      { title: 'WALL·E', year: 2008 },
      { title: 'American Beauty', year: 1999 },
      { title: 'The Dark Knight Rises', year: 2012 },
      { title: 'Princess Mononoke', year: 1997 },
      { title: 'Aliens', year: 1986 },
      { title: 'Oldboy', year: 2003 },
      { title: 'Once Upon a Time in America', year: 1984 },
      { title: 'Witness for the Prosecution', year: 1957 },
      { title: 'Das Boot', year: 1981 },
      { title: 'Citizen Kane', year: 1941 },
      { title: 'North by Northwest', year: 1959 },
      { title: 'Vertigo', year: 1958 },
      { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
      { title: 'Reservoir Dogs', year: 1992 },
      { title: 'Braveheart', year: 1995 },
      { title: 'M', year: 1931 },
      { title: 'Requiem for a Dream', year: 2000 },
      { title: 'Amélie', year: 2001 },
      { title: 'A Clockwork Orange', year: 1971 },
      { title: 'Like Stars on Earth', year: 2007 },
      { title: 'Taxi Driver', year: 1976 },
      { title: 'Lawrence of Arabia', year: 1962 },
      { title: 'Double Indemnity', year: 1944 },
      { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
      { title: 'Amadeus', year: 1984 },
      { title: 'To Kill a Mockingbird', year: 1962 },
      { title: 'Toy Story 3', year: 2010 },
      { title: 'Logan', year: 2017 },
      { title: 'Full Metal Jacket', year: 1987 },
      { title: 'Dangal', year: 2016 },
      { title: 'The Sting', year: 1973 },
      { title: '2001: A Space Odyssey', year: 1968 },
      { title: "Singin' in the Rain", year: 1952 },
      { title: 'Toy Story', year: 1995 },
      { title: 'Bicycle Thieves', year: 1948 },
      { title: 'The Kid', year: 1921 },
      { title: 'Inglourious Basterds', year: 2009 },
      { title: 'Snatch', year: 2000 },
      { title: '3 Idiots', year: 2009 },
      { title: 'Monty Python and the Holy Grail', year: 1975 },
    ];
    return (
      <div className="recording">
        <div className="page-title">
           <span className={'header__name'}>
              <FormattedMessage id="app.recording"/>
            </span>
        </div>

        <div className="recording-head">
          <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          />
          <div className="recording__filter">
            <span><FormattedMessage id="app.selectDate"/></span>
            <TextField
              type="date"
              defaultValue=""
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <Button variant="contained" className="yellow-btn recording__add-btn" onClick={this.addRecordingHandle}>
            {/*<FormattedMessage id="app.addProduct"/>*/}
            Добавить запись
          </Button>

          {this.state.isOpen ?
            <PopupWrapper classPopup={'add-recording'} closePopup={this.closePopupAddRecording}>
              <AddRecordingPopup />
            </PopupWrapper>
            : ''}
        </div>
        <div className="page-section">
          <div className="page-section__name">
            <FormattedMessage id="app.today"/>
          </div>
          <div className="page-section__content">
            <TableContainer className={'recording-table'}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={'clients-table-head'}>
                    <TableCell><FormattedMessage id="app.time"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.task"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientPhone"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.responsible"/></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">9:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">11:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">12:30</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">16:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <div className="page-section">
          <div className="page-section__name">
            <FormattedMessage id="app.tomorrow"/>
          </div>
          <div className="page-section__content">
            <TableContainer className={'recording-table'}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={'clients-table-head'}>
                    <TableCell><FormattedMessage id="app.time"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.task"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientPhone"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.responsible"/></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">9:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">11:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">12:30</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">16:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="page-section">
          <div className="page-section__name">
            28.08.2020
          </div>
          <div className="page-section__content">
            <TableContainer className={'recording-table'}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={'clients-table-head'}>
                    <TableCell><FormattedMessage id="app.time"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.task"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientPhone"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.responsible"/></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">9:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">11:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">12:30</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">16:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="page-section">
          <div className="page-section__name">
            31.08.2020
          </div>
          <div className="page-section__content">
            <TableContainer className={'recording-table'}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={'clients-table-head'}>
                    <TableCell><FormattedMessage id="app.time"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.task"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientPhone"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.responsible"/></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">9:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">11:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">12:30</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">16:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="page-section">
          <div className="page-section__name">
            01.09.2020
          </div>
          <div className="page-section__content">
            <TableContainer className={'recording-table'}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={'clients-table-head'}>
                    <TableCell><FormattedMessage id="app.time"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.task"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientPhone"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.responsible"/></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">9:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">11:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">12:30</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">16:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default Recording
