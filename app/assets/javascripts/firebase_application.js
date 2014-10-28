var here_now = function () {
	return "i am in firebase_application.js now";
}

var increment_count_txn = function (current_count) {
	return current_count + 1;
};

var decrement_count_txn = function (current_count) {
	if (current_count == 0)
		return current_count;
	else
		return current_count - 1;
};

