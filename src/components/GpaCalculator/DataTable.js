
import React, { Component, Fragment } from 'react';
import resultMaking from './ResultMaking';
import handleData from './HandleData';

export default class DataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bangla: {},
            math: {},
            english: {},
            result: {}
        }
    }

    // getData
    getData = (event) => {
        let name = event.target.name
        let value = event.target.value;
        let outPut = handleData(value);

        if (name === 'bangla') {
            this.setState({
                bangla: outPut
            });
        } else if (name === 'math') {
            this.setState({
                math: outPut
            });
        } else if (name === 'english') {
            this.setState({
                english: outPut
            });
        }
    }

    // createResult
    createResult = () => {
        let result = resultMaking(this.state);
        this.setState({
            result
        });
    }

    render() {
        return (
            <Fragment>
                <div className="container mt-5">
                    <form>
                        <table className="table table-bordered table-sm">
                            <thead className="bg-secondary text-light">
                                <tr>
                                    <th width="20%" scope="col">Subject</th>
                                    <th width="40%" scope="col">Marks</th>
                                    <th width="20%" scope="col">GPA</th>
                                    <th width="20%" scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bangla</td>
                                    <td>
                                        <input onChange={this.getData} type="text" className="form-control rounded-0" placeholder="Enter Your Marks" name="bangla" />
                                    </td>
                                    <td> {this.state.bangla.gpa}</td>
                                    <td> {(this.state.bangla.msg) ? this.state.bangla.msg : this.state.bangla.grade}</td>
                                </tr>
                                <tr>
                                    <td>Mathmatics</td>
                                    <td>
                                        <input onChange={this.getData} type="text" className="form-control rounded-0" placeholder="Enter Your Marks" name="math" />
                                    </td>
                                    <td> {this.state.math.gpa}</td>
                                    <td> {(this.state.math.msg) ? this.state.math.msg : this.state.math.grade}</td>
                                </tr>
                                <tr>
                                    <td>English</td>
                                    <td>
                                        <input onChange={this.getData} type="text" className="form-control rounded-0" placeholder="Enter Your Marks" name="english" />
                                    </td>
                                    <td> {this.state.english.gpa}</td>
                                    <td> {(this.state.english.msg) ? this.state.english.msg : this.state.english.grade}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2">
                                        <button type="button" className="btn btn-primary rounded-0" onClick={this.createResult}>Result</button>
                                    </td>
                                    <td>
                                        <strong>CGPA : </strong> { parseFloat(this.state.result.cgpa) ? parseFloat(this.state.result.cgpa).toFixed(2) : this.state.result.cgpa }
                                    </td>
                                    <td>
                                        <strong>Total Grade : </strong>  {this.state.result.totalGrade}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </form>
                </div>
            </Fragment>
        )
    }
}
