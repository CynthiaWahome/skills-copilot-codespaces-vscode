function skillsMember(){ // Function to display the skills of the member
    let skills = {
        HTML: 7,
        CSS: 6,
        JavaScript: 8,
        React: 6,
        Node: 7,
        Python: 5,
        MongoDB: 5,
        Express: 6,
        Redux: 5,
        TypeScript: 6,
        SQL: 6
    }

    let sortedSkills = Object.entries(skills).sort((a, b) => b[1] - a[1]);

    let skillList = document.getElementById("skills");

    for (let i = 0; i < sortedSkills.length; i++) {
        let skill = document.createElement("div");
        skill.className = "skill";
        skill.innerHTML = `
            <p>${sortedSkills[i][0]}</p>
            <div class="skill-bar">
                <div class="skill-fill" style="width: ${sortedSkills[i][1] * 10}%"></div>
            </div>
        `;
        skillList.appendChild(skill);
    }
}