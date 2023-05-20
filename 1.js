function parseXML(xml) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');
  
    const result = [];
    const students = xmlDoc.getElementsByTagName('student');
  
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      const name = student.getElementsByTagName('name')[0];
      const firstName = name.getElementsByTagName('first')[0].textContent;
      const lastName = name.getElementsByTagName('second')[0].textContent;
      const age = student.getElementsByTagName('age')[0].textContent;
      const prof = student.getElementsByTagName('prof')[0].textContent;
      const lang = name.getAttribute('lang');
  
      result.push({
        name: `${firstName} ${lastName}`,
        age: parseInt(age),
        prof: prof,
        lang: lang,
      });
    }
  
    return { list: result };
  }
  
const xml = `<list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>`;
  
const result = parseXML(xml);
  
console.log(result);