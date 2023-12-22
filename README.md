![image](https://github.com/twingay96/live-form-previews/assets/64403357/7e46bc8a-a91f-41f8-a1b0-c5ee00cb621e)![image](https://github.com/twingay96/live-form-previews/assets/64403357/af8e2482-3ccf-431a-b484-43a74d95192a)    rails g scaffold tasks
실행후 생성된 tasks모델 파일(app/models/task.rb)에  서버측 유효성 검증 추가:

![image](https://github.com/twingay96/live-form-previews/assets/64403357/b6d049d7-d55e-44cf-92c9-8bebcad78bc0)

ActiveRecord에서 제공하는 기능으로, 모델 객체가 데이터베이스에 저장되기 전에 
특정 조건을 충족하는지 검사하여 만약 조건을 충족하지 않으면 객체 저장이 거부되고 , 
유효 하지 않음을 나타내는 오류 메시지가 "errors"객체에 추가됨. 이 오류 메시지에 접근하려면, 

모델 인스턴스에서 errors.full_messages 또는 errors[:attribute]와 같은 메소드를 호출하면 됩니다. 
예를 들어, task 객체에 대한 유효성 검사가 실패하면 task.errors.full_messages를 호출하여 모든 오류 메시지를 배열로 가져올 수 있습니다.

new.html.erb의 partial인 _form.html.erb에서 :


![image](https://github.com/twingay96/live-form-previews/assets/64403357/7352d451-2889-4aae-8091-cf2d9aa5dbc4)
![image](https://github.com/twingay96/live-form-previews/assets/64403357/35862ca8-abe3-4499-ba4a-b942139c3fc4)

![image](https://github.com/twingay96/live-form-previews/assets/64403357/d5574669-294f-4819-921c-8c65a186b358)
data: { controller: "autosubmit" }: HTML 태그에 data-controller="autosubmit" 데이터 속성을 추가합니다. 
이는 Stimulus.js 프레임워크에서 해당 폼이 autosubmit라는 이름의 컨트롤러에 의해 제어됨을 나타냅니다. 
![image](https://github.com/twingay96/live-form-previews/assets/64403357/c404ada1-44c8-4fc6-9f3d-ed4a7388957e)
(html로 표기된 모습)

![image](https://github.com/twingay96/live-form-previews/assets/64403357/b1560453-a542-40e3-b76b-988653bec846)
data: { autosubmit_target: "submitbutton" }: 이것은 Stimulus 프레임워크의 데이터 속성으로, autosubmit 컨트롤러의 submitbutton 타겟과 관련이 있습니다. 
이는 Stimulus 컨트롤러가 특정 버튼을 타겟으로 삼아 자동으로 폼을 제출하도록 하는 로직을 가질 수 있음을 나타냅니다.

formaction은 특정 버튼에 대해 폼의 action 속성을 재정의할 때 사용되며, 하나의 폼에 여러 제출 버튼이 있고 각 버튼이 다른 동작을 해야 할 때 유용합니다. 이미지의 코드에서 formaction은 버튼이 클릭됐을 때 preview_tasks_path로 데이터를 전송하도록 지정하고 있습니다. 이는 폼의 기본 action URL을 무시하고, 이 버튼에 대해서만 새로운 도착지(URL)를 설정합니다.

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




