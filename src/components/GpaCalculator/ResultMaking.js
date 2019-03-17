


// @method
// resultMaking

export default function resultMaking(state) {

    let banglaGpa = parseFloat(state.bangla.gpa);
    let mathGpa = parseFloat(state.math.gpa);
    let englishGpa = parseFloat(state.english.gpa);

    let resultStore = {
        totalGpa: '',
        cgpa: '',
        totalGrade: ''
    };


    if (banglaGpa === 0 || mathGpa === 0 || englishGpa === 0) {
        resultStore.totalGpa = '0';
        resultStore.cgpa = '0';
        resultStore.totalGrade = 'F';

        // result return
        return resultStore;

    } else {
        if (banglaGpa && mathGpa && englishGpa) {

            resultStore.totalGpa = (banglaGpa + mathGpa + englishGpa);
            resultStore.cgpa = (resultStore.totalGpa / 3);

            if (resultStore.cgpa === 5) {
                resultStore.totalGrade = 'A+';
            } else if (resultStore.cgpa < 5 && resultStore.cgpa >= 4) {
                resultStore.totalGrade = 'A';
            } else if (resultStore.cgpa < 4 && resultStore.cgpa >= 3.5) {
                resultStore.totalGrade = 'A-';
            } else if (resultStore.cgpa < 3.5 && resultStore.cgpa >= 3) {
                resultStore.totalGrade = 'B';
            } else if (resultStore.cgpa < 3 && resultStore.cgpa >= 2.5) {
                resultStore.totalGrade = 'C';
            } else {
                resultStore.totalGrade = 'D';
            }
        }

        // result return
        return resultStore;
    }


}
