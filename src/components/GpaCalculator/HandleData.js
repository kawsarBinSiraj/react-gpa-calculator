

// @method
// handleData

export default function handleData(value) {
    let outPut = {
        mark: '',
        gpa: '',
        grade: '',
        msg: ''
    };

    if (value !== '') {
        if (value >= 80 && value <= 100) {
            outPut.mark = value;
            outPut.gpa = '5.00';
            outPut.grade = 'A+';
        } else if (value < 80 && value >= 70) {
            outPut.mark = value;
            outPut.gpa = '4.00';
            outPut.grade = 'A';
        } else if (value < 70 && value >= 60) {
            outPut.mark = value;
            outPut.gpa = '3.50';
            outPut.grade = 'A-';
        } else if (value < 60 && value >= 50) {
            outPut.mark = value;
            outPut.gpa = '3.00';
            outPut.grade = 'B';
        } else if (value < 50 && value >= 40) {
            outPut.mark = value;
            outPut.gpa = '2.50';
            outPut.grade = 'C';
        } else if (value < 40 && value >= 33) {
            outPut.mark = value;
            outPut.gpa = '2.00';
            outPut.grade = 'D';
        } else if (value < 33 && value >= 0) {
            outPut.mark = value;
            outPut.gpa = '0';
            outPut.grade = 'F';
        } else {
            outPut.msg = 'Chapa Maris Na !!';
        }
    }

    // outPut return
    return outPut;
}