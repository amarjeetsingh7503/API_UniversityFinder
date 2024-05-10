let url = "http://universities.hipolabs.com/search?name="
let btn = document.querySelector('button');
let inp = document.querySelector("input");

btn.addEventListener('click', async () => {
    let country = inp.value;
    inp.value = "";
    let collegeArr = await getColleges(country);
    showColleges(collegeArr);
});

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch (e) {
        console.log('Error: ', e);
    }
}

function showColleges(collegeArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (const college of collegeArr) {
        let li = document.createElement('li');
        li.innerHTML = `${college.name}, ${college.country} (<a href="${college.web_pages[0]}" target="_blank" class="links">Visit Here</a>)`;
        list.appendChild(li);
    }
}