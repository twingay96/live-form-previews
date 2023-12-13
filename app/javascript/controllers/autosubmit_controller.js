import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="autosubmit"
export default class extends Controller {
  static targets = ["submitbutton"]
  connect() {
    console.log("autosubmit connected")
    this.submitbuttonTarget.hidden = true
  }
  submit(){ // submit 액션
    // this.submitbuttonTarget.click()
    clearTimeout(this.timeout) // debounce 없이 하면 매순간마다 요청해서 비용이 높아질 수 있음
    this.timeout = setTimeout(()=>{
      this.submitbuttonTarget.click()
    },200 )
  }
}
