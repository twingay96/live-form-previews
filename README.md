![image](https://github.com/twingay96/live-form-previews/assets/64403357/35862ca8-abe3-4499-ba4a-b942139c3fc4)

![image](https://github.com/twingay96/live-form-previews/assets/64403357/d5574669-294f-4819-921c-8c65a186b358)
data: { controller: "autosubmit" }: HTML 태그에 data-controller="autosubmit" 데이터 속성을 추가합니다. 
이는 Stimulus.js 프레임워크에서 해당 폼이 autosubmit라는 이름의 컨트롤러에 의해 제어됨을 나타냅니다. 
![image](https://github.com/twingay96/live-form-previews/assets/64403357/c404ada1-44c8-4fc6-9f3d-ed4a7388957e)
(html로 표기된 모습)

![image](https://github.com/twingay96/live-form-previews/assets/64403357/b1560453-a542-40e3-b76b-988653bec846)
data: { autosubmit_target: "submitbutton" }: 이것은 Stimulus 프레임워크의 데이터 속성으로, autosubmit 컨트롤러의 submitbutton 타겟과 관련이 있습니다. 
이는 Stimulus 컨트롤러가 특정 버튼을 타겟으로 삼아 자동으로 폼을 제출하도록 하는 로직을 가질 수 있음을 나타냅니다.
![4-html](https://github.com/twingay96/live-form-previews/assets/64403357/f7297b83-7641-4481-9a0f-373c3d31098c)
(html로 표기된 모습)

![image](https://github.com/twingay96/live-form-previews/assets/64403357/a8d5eba5-ace0-443a-ad4d-2201df9b668a)
clearTimeout(this.timeout) // debounce 방식 하면 여러번클릭해도 요청해서 비용이 늘어날 수 있음

clearTimeout 함수를 호출하여 this.timeout에 저장된 타이머를 취소합니다.
이는 여러 번의 클릭 이벤트가 발생해도 debounce 기법을 사용함으로써 서버에 중복 요청을 보내지 않아 비용을 절약할 수 있다는 것을 설명

this.timeout = setTimeout(()=>{}
setTimeout 함수를 사용하여 일정 시간 후에 코드를 실행하도록 예약하고 있습니다. 이 setTimeout은 this.timeout에 할당되어, 필요한 경우 취소할 수 있게 합니다.

}, 3200 )
setTimeout에 전달된 함수는 200 밀리초(0.2초) 후에 실행됩니다.




