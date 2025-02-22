# var vs let / const

- 변수 선언전에 접근 가능한 선언자: `var`

  - let / const는 에러 발생: `Refer Error: before initialzation`
  - 초기화전에 사용해서 문제가 발생한다? 그러면 초기화만 안하고 선언만 하면 어떨까?
    - 내 생각에는 당연히 문제가 생길거같아
    - 왜냐하면 변수 선언 -> 초기화 순서잖아
    - 결과적으로 이미 초기화 에러가 발생하는 let const는 여전히 에러가 발생할꺼야
    - 그러면 관심사는 var네
    - var는 이래도 에럭가 발생하지 않을까?
    - 신기하게도 에러가 발생하지 않고 `undefined`로 찍히네
    - 이유가 뭘까?
    - 이유도 궁금하지만 **유연성** 측면에서 보면 var가 더 우수해보여
    - 하지만 let const는 분명 var의 문제점을 해결하기 위한 최신 문법이야
    - 그렇다면 문제점이 뭘까?
    - 내 생각에는 에러가 안뜨는거 자체가 문제가될거같아
    - undefined 라면 결국 값이 없는건데, 에러가 발생하지 않으니 있다고 가정하고 추가 로직을 작성하면 문제가 발생할꺼야
    - 어떻게 증명할까?
    - 이러면 어떨까?
      - var 변수가 특정 단위를 계산하는데 사용하는 기준 숫자인거지
      - 그러면 유저는 해당 변수를 사용해서 어떤 숫자와 곱해서 환산된 결과를 기대할꺼야
      - 근데 실제로 초기화전에 계산하면 어떻게 될까?
      - `NaN`으로 찍히네
      - 당연한 결과일꺼야. undefined 와 숫자를 곱하는건 불가능해
  - 그럼 다시 돌아와서 근본적인 이유로 돌아가자
    - 왜 var는 이러한 동작을 허용했으며, 어떻게 이런 동작이 가능한걸까?
    - 일단 왜 가능한지는 조사가 필요해 -> 유연성을 위해서 같은데 정확히는 모르겠어
    - 어떻게는 어떨까?
      - 예측을 해보자
      - var를 어디서 선언하더라도 제일 먼저 읽게하면 위의 동작이 가능할거같아
      - 하지만 값을 설정해도 undefined가 되는거 보면 값은 같이 올라가지 않고 변수만 올라가고 undefined로 임시로 초기화시키나봐
  - 그러면 개선된 let const를 다시 살펴보자
    - let이나 const는 정말 선언전에는 아예 접근이 불가능한걸까?
    - 선언전에는 확실히 접근이 불가능해
    - 그러면 선언 -> 사용 -> 초기화는 에러가 발생할까?
    - 우선 let은 var와 똑같이 undefined가 찍히고 결과는 NaN이 되면서 에러는 안발생하네
    - const는?
    - 아예 다른 에러가 찍히네 `SyntaxError: Missing initializer`가 발생해
    - 이전에는 분명 Ref 에러였어, 하지만 이번에는 문법오류야
    - 그렇다면 이전까지는 js엔진이 읽다가 중간에 이상한 점을 눈치챈거면, 이번에는 아예 처음부터 이상함을 눈치챈거라고 볼수있을까?
    - 왜냐하면 문법오류는 애초에 잘못된 사용이라는거잖아
    - 그러면 일단 const는 초기화가 필수인가봐

- 이번에는 이 변수들을 함수에서 사용해볼까?

  - 가장 궁금한건 함수 선언문안에서 변수 사용 -> 변수 선언/초기화 -> 함수 호출 이 과정에서 에러가 발생할까?
  - 이 문제의 쟁점은 js엔진이 코드를 읽을때 정말 위에서부터 한줄한줄 다 읽냐 vs 함수를 만나는 순간 인지만하고 호출하는 순간 읽냐 일거같아
    - 전자라면 var가 아닌 변수들은 에러가 발생하겠지
    - 후자라면 전부 에러가 발생하지 않을거같아
    - 왜냐하면 함수를 호출할때는 이미 변수가 선언/초기화된 이후야
  - 결과적으로 에러가 발생하지 않네
  - 그러면 js엔진은 함수를 만나는 순간 바로 함수 내부를 읽는게 아니라 함수가 호출될때 읽나봐
  - 만약에 순서를 꼬아서 함수 호출 -> 함수 선언으로 바꾸면 어떨까?

    - 에러가 발생할거같은데? 함수 호출 부분을 읽는 순간에 해당 함수가 뭔지 모를거같아
    - 에러가 발생하기는 하는데, 변수가 초기화되지 않았다는 에러가 발생하네
    - 그러면 함수 호출을 읽는 순간 함수를 읽나봐
    - 이게 가능하려면 js엔진은 최소한 함수의 이름과 해당 이름의 함수가 코드 어딘가에 정의되어있다는 사실은 알고있어야할까야
    - 왜냐하면 그래야 함수 호출문을 만났을때 이게 코드상 어딘가에 존재하는 함수라는걸 알고있어서 에러를 발생시키지 않을테니까
    - 위의 가정을 증명할수있을까?
    - `console.log(함수)`를 찍으면 함수를 인식하고 있는게 나와
    - `consloe.log(함수())`를 찍으면 undefined가 나오네
    - 그러면 var와 마찬가지로 함수를 먼저 인지하고 undefined로 임의로 초기화 해놓나봐

  - 이번에는 다른 관점에서 바라봐보자
  - 함수 내부에서 선언된 변수를 밖에서 접근 가능할까?
    - 일단 함수 선언 -> 함수안에서 변수 선언/초기화 -> 함수 호출 -> 변수 참조
    - 이과정에서는 아예 변수를 모르네
    - 이유가 뭘까?
    - 위에서 증명한 사실들을 확인해보자
    - 함수 선언문은 런타임 이전에 js엔진이 인지하고 undefined로 초기화해놔
    - 하지만 이 상황에서는 함수 호출후에 변수를 접근하니까 위와 관련이 크게 없을수도있겠어
    - 함수 호출이된순간 함수 내부 코드들이 읽힐거고 변수가 선언/초기화될거니까
    - 그러면 왜 접근이 안될까? 심지어 앞에서 var는 맨위로 올라가는걸 확인했는데 지금은 참조가 불가능해
      - 첫번째 생각해볼수있는건 함수가 호출되면 함수 내부코드가 읽히고, 다 읽으면 함수가 이제 js 인지 공간하에서 빠지는거야
        - 증명해볼까?
        - 어떻게 증명할수있을까? -> 함수 호출후에 다시 함수를 호출해볼까?
        - 함수가 종료되면 빠진다는 가정이면 다시 함수에 접근이 안될테니까
        - 이 가설은 틀렸나봐 -> 문제없이 두번다 호출되
      - 두번째로 생각해볼수있는건 함수가 다 읽어지면 다시 함수 인지 상태로 돌아가는거야
        - 즉 함수는 인지하고있되, 함수는 undefined 상태인거지
        - 이걸 어떻게 증명할수있을까?
        - 어렵네,, 함수가 호출된 후에 다음라인에서는 함수가 undefined인걸 보면될까?
        - `consloe.log(함수())`는 신기하네 함수 내부의 콘솔도 찍히긴하지만 해당 콘솔자체는 undefined가 찍혀
        - 그러면 함수 호출하고 그 즉시 함수가 undefined로 돌아가는걸까?
      - 지금까지의 사고과정에서 한가지 오류가 있어
      - 함수 자체가 undefined로 초기화되는게 아니라 단순히 return값이 없어서 undefined로 임의로 리턴되는거야 (정확히는 리턴이 없으니 undefined)
    - 실생활적으로 접근해볼까?
      - 함수는 일종의 제작법 문서일꺼야
      - 왜냐하면 함수는 반복되는 여러 로직을 묶어놓은거고, 실생활에서도 같은 조립을 반복할때 해당 조립 방법 문서를 만들어 기록해놓으면 다시 또 조립할때 조립 방법 문서를 참조하면되니까,,
      - 그러면 이렇게 보면 어떨까?
      - 새로운 조립을 한다고 조립 문서를 다시 제작하나? 같은 조립 대상인데?
      - 아닐꺼야 기존에 있던 조립 문서를 보고 똑같이 만들꺼야
      - 대신 하나의 조립이 완료되면 조립하던 곳을 일종의 청소를 할꺼야, 왜냐하면 다시 만드는 시점은 모르니까
      - 이제 다시 조립해야하면 다시 조립하던 곳을 형성하고 똑같은 문서를 참고하여 조립할꺼야
      - 결과적으로 함수를 여러번 호출한다고 함수가 여러번 생성되는건 아니고, 같은 함수를 참고하여 다른 곳에서 만드는겄뿐이야
  - 이를 증명할수있어
    - 예를들어 함수가 클로저를 활용하여 count를 증가시키는 함수일때, 만약 같은 공간에서 계속 함수가 호출되면다면 함수를 연속으로 두번호출하면 1 -> 2 -> 3 -> 4 이렇게되어야해
    - 근데 실제로는 1 -> 2 / 1 -> 2 이렇게 되닌까 아예 다른공간인거지
