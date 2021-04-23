// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:




String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
}
