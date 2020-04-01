export const getFormPost2 = (data) => {
    let strr = [];

    data.content.map((post, i) => {
        let tempObj = {};

        tempObj.submissionID = post.id;
        tempObj.createdAt = post.created_at.split(' ')[0];

        // console.log(post);
        Object.values(post.answers).map((el) => {
            // console.log(el);
            tempObj[el.text.replace(/\s+/g, '_').toLowerCase()] = el.answer ? el.answer : '';
            return el.answer;

        })

        // console.log(tempObj);
        strr.push(tempObj);
        return strr;
    });
    return strr;
}