var quotes = [];
quotes[0] = "당신은 지금도 최고고, 이전에도 최고였으며 앞으로도 최고일 것입니다.";
quotes[1] = "성공하는 사람은 실패하는데 익숙한 사람이다.";
quotes[2] = "후회를 최대한 이용하라. 깊이 후회한다는 것은 새로운 삶은 산다는 것이다.";
quotes[3] = "가짜 친구는 소문을 믿고 진짜 친구는 나를 믿는다.";
quotes[4] = "성공이라는 못을 박으려면 끈질김이라는 망치가 필요하다.";
quotes[5] = "인생이란 결코 공평하지 않다. 이 사실에 익숙해져라.";
quotes[6] = "'언젠가'라는 날은 영원히 오지 않는다.";
quotes[7] = "문제점을 찾지 말고 해결책을 찾으라.";
quotes[8] = "착한 일은 작다 해서 아니하지 말고, 악한 일은 작다 해도 하지 말라.";
quotes[9] = "자존심은 어리석은 자의 소유물이다";

var index = Math.floor(Math.random() * 10);
document.write("<p>&quot;" + quotes[index] + "&quot;</p>");