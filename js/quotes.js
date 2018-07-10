var quotes = [
  ["The greater the obstacle, the more glory in overcoming it.", "Moliere"],
  ["Quality is much better than quantity. One home run is much better than two doubles.", "Steve Jobs"],
  ["In real open source, you have the right to control your own destiny.", "Linus Torvalds"],
  ["The way get started is to quit talking and begin doing.", "Walt Disney"],
  ["Design is not just what it looks like and feels like. Design is how it works.", "Steve Jobs"],
  ["The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", "Winston Churchill"],
  ["You learn more from failure than from success. Don't let it stop you. Failure builds character.", "Unknown"],
  ["Great things in business are never done by one person. They're done by a team of people.", "Steve Jobs"],
  ["If I had asked people what they wanted, they would have said faster horses.", "Henry Ford"]
];

jQuery(document).ready(function($) {
	var day = new Date().getDate() % quotes.length;
	var quote = quotes[day][0];
	var author = quotes[day][1];
	$("#quoteText").text('"' + quote + '"');
	$("#quoteAuthor").text(author);
});
