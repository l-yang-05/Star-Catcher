import React from 'react';
import axios from 'axios';
import './Index.css';

class TallyForm extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeRun = this.onChangeRun.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);

        this.onChangeStudent = this.onChangeStudent.bind(this);

        this.onChangeCategoryA = this.onChangeCategoryA.bind(this);
        this.onChangeCategoryB = this.onChangeCategoryB.bind(this);
        this.onChangeCategoryC = this.onChangeCategoryC.bind(this);
        this.onChangeCategoryD = this.onChangeCategoryD.bind(this);
        this.onChangeCategoryE = this.onChangeCategoryE.bind(this);
        this.onChangeCategoryF = this.onChangeCategoryF.bind(this);
        this.onChangeCategoryG = this.onChangeCategoryG.bind(this);
        this.onChangeCategoryH = this.onChangeCategoryH.bind(this);
        this.onChangeCategoryI = this.onChangeCategoryI.bind(this);
        this.onChangeCategoryJ = this.onChangeCategoryJ.bind(this);
        this.onChangeCategoryK = this.onChangeCategoryK.bind(this);
        this.onChangeCategoryL = this.onChangeCategoryL.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            run: '',
            date: '',
            location: '',
            categoryA: '',
            categoryB: '',
            categoryC: '',
            categoryD: '',
            categoryE: '',
            categoryF: '',
            categoryG: '',
            categoryH: '',
            categoryI: '',
            categoryJ: '',
            categoryK: '',
            categoryL: '',
            student: '',
            students: []
        }
    }

    componentDidMount() {
        axios.get('/students')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        students: response.data.map(student => student.full_name),
                        student: response.data[0].full_name
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeStudent(e) {
        this.setState({
            student: e.target.value
        })
    }

    onChangeRun(e) {
        this.setState({
            run: e.target.value
        })
    }
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }
    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
    }

    onChangeCategoryA(e) {
        this.setState({
            categoryA: e.target.value
        })
    }

    onChangeCategoryB(e) {
        this.setState({
            categoryB: e.target.value
        })
    }
    onChangeCategoryC(e) {
        this.setState({
            categoryC: e.target.value
        })
    }
    onChangeCategoryD(e) {
        this.setState({
            categoryD: e.target.value
        })
    }
    onChangeCategoryE(e) {
        this.setState({
            categoryE: e.target.value
        })
    }
    onChangeCategoryF(e) {
        this.setState({
            categoryF: e.target.value
        })
    }

    onChangeCategoryG(e) {
        this.setState({
            categoryG: e.target.value
        })
    }

    onChangeCategoryH(e) {
        this.setState({
            categoryH: e.target.value
        })
    }
    onChangeCategoryI(e) {
        this.setState({
            categoryI: e.target.value
        })
    }
    onChangeCategoryJ(e) {
        this.setState({
            categoryJ: e.target.value
        })
    }
    onChangeCategoryK(e) {
        this.setState({
            categoryK: e.target.value
        })
    }
    onChangeCategoryL(e) {
        this.setState({
            categoryL: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const run = {
            run: this.state.run,
            date: this.state.date,
            location: this.state.location,
            student: this.state.student
        }

        const category = {
            categoryA: this.state.categoryA,
            categoryB: this.state.categoryB,
            categoryC: this.state.categoryC,
            categoryD: this.state.categoryD,
            categoryE: this.state.categoryE,
            categoryF: this.state.categoryF,
            categoryG: this.state.categoryG,
            categoryH: this.state.categoryH,
            categoryI: this.state.categoryI,
            categoryJ: this.state.categoryJ,
            categoryK: this.state.categoryK,
            categoryL: this.state.categoryL
        }

        console.log(run);

        axios.post('/run', run)
            .then(res => console.log(res.data));

        axios.put('/run', category)
            .then(res => console.log(res.data))

        window.location = '/menu';
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="run">Run Number</label>
                        <input type="number" value={this.state.run}
                            onChange={this.onChangeRun} name="run" id="run"></input>

                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date"></input>

                        <label htmlFor="run">Location</label>
                        <input type="text" selected={this.state.date}
                            onChange={this.onChangeDate} name="location" id="location"></input>


                        <label htmlFor="student">Student</label>
                        <select name="student" id="student" ref="studentInput"
                            required
                            className="form-control"
                            value={this.state.student}
                            onChange={this.onChangeStudent} defaultValue="--- Select A User ---">
                            <option value="--- Select A User ---" selected disabled> --- Select A User ---</option>
                            {this.state.students.map(function (student) {
                                return (<option key={student} value={student}>{student} </option>)
                            })}
                        </select>



                        <label htmlFor="categories">Categories:</label>
                        <div className="category-wrapper">
                            <div className="category-card">
                                <h2>Category A: </h2>
                                <input type="number" value={this.state.categoryA}
                                    onChange={this.onChangeCategoryA}></input>
                            </div>
                            <div className="category-card">
                                <h2>Category B: </h2>
                                <input type="number" value={this.state.categoryB}
                                    onChange={this.onChangeCategoryB}></input>
                            </div>
                            <div className="category-card">
                                <h2>Category C: </h2>
                                <input type="number" value={this.state.categoryC}
                                    onChange={this.onChangeCategoryC}></input>
                            </div>
                            <div className="category-card">
                                <h2>Category D: </h2>
                                <input type="number" value={this.state.categoryD}
                                    onChange={this.onChangeCategoryD}></input>
                            </div>
                            <div className="category-card">
                                <h2>Category E: </h2>
                                <input type="number" value={this.state.categoryE}
                                    onChange={this.onChangeCategoryE} ></input>
                            </div>
                            <div className="category-card">
                                <h2>Category F: </h2>
                                <input type="number" value={this.state.categoryF}
                                    onChange={this.onChangeCategoryF}></input>
                            </div>
                            <div className="category-card">
                                <h2>Category G: </h2>
                                <input type="number" value={this.state.categoryG}
                                    onChange={this.onChangeCategoryG}></input>
                            </div>
                            <div className="category-card">
                                <h2>Category H: </h2>
                                <input type="number" value={this.state.categoryH}
                                    onChange={this.onChangeCategoryH}></input>
                            </div>
                            <div className="category-card">
                                <h2>Category I: </h2>
                                <input type="number" value={this.state.categoryI}
                                    onChange={this.onChangeCategoryI}></input>
                            </div>
                            <div className="category-card">
                                <h2>Category J: </h2>
                                <input type="number" value={this.state.categoryJ}
                                    onChange={this.onChangeCategoryJ}></input>
                            </div>
                            <div className="category-card">
                                <h2>Category K: </h2>
                                <input type="number" value={this.state.categoryK}
                                    onChange={this.onChangeCategoryK}></input>
                            </div>
                            <div className="category-card">
                                <h2>Category L: </h2>
                                <input type="number" value={this.state.categoryL}
                                    onChange={this.onChangeCategoryL}></input>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create Run and Tallies" className="btn btn-primary" />
                            </div>
                        </div>


                    </form>

                </div >
            </React.Fragment>

        )
    }
}
class RunForm extends React.Component {

    state = {
        location: "",
        time_recorded: "",
        run_number: 0,
        notes: "",
        student_id: 0
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        const { location, time_recorded, run_number, notes, student_id } = this.state;
        axios.post('/runs/', { location, time_recorded, run_number, notes, student_id })
        this.setState({
            location: "",
            time_recorded: "",
            run_number: 0,
            notes: "",
            student_id: 0
        })
    }
    render() {

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        onChange={this.onChange}></input>
                    <label htmlFor="date" >Date</label>
                    <input
                        type="text"
                        id="time_recorded"
                        name="time_recorded"
                        onChange={this.onChange}></input>
                    <label htmlFor="run">Run Number</label>
                    <input
                        type="text"
                        id="run_number"
                        name="run_number"
                        onChange={this.onChange}></input>
                    {/* <label htmlFor="run_number">Run Number</label>
                    <input 
                        type="text" 
                        id="run_number" 
                        name="run_number"
                        onChange={this.onChange}></input> */}
                    <label htmlFor="notes">Notes</label>
                    <input
                        type="textarea"
                        id="notes"
                        name="notes"
                        onChange={this.onChange}></input>
                    <label htmlFor="student_id">Student ID</label>
                    <input
                        type="text"
                        id="student_id"
                        name="student_id"
                        onChange={this.onChange}></input>

                    <div className="text-center">
                        <button type="submit" >Add Run</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default TallyForm;