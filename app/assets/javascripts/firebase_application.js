// namespace for firebase transaction

var fxn = {};

fxn.increment_count = function (current_count) {
	return current_count + 1;
};

fxn.decrement_count = function (current_count) {
	if (current_count == 0)
		return current_count;
	else
		return current_count - 1;
};

