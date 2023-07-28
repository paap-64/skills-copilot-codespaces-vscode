function skillsMember() {
  // This is a private function
  function calculateNumbers(var1, var2) {
    return var1 + var2;
  }
  // This is a public function
  this.addNumbers = function(var1, var2) {
    return calculateNumbers(var1, var2);
  };
}