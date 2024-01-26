var storyContent = ﻿{"inkVersion":20,"root":[["^A small device sits on the table in front of you. It looks haphazard, wires and cables shoddily pinned down around a small dial. It looks like it could connect to your arm. ",{"#":"AUDIOLOOP regularambiance.mp3"},"\n",["ev",{"^->":"0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^Plug in the device.  ",{"->":"$r","var":true},null]}],["ev",{"^->":"0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^Do Nothing.  ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.3.s"},[{"#n":"$r2"}],{"#":"CLASS: chose"},"\n",{"->":"DeviceStarted"},{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.4.s"},[{"#n":"$r2"}],"end","\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"DeviceStarted":[["^You grab the loose assemblage of cables and insert it into the appropriate slot. It doesn't fit smoothly- you need to use a bit of force to get it to stick, but it does connect.","\n",["ev",{"^->":"DeviceStarted.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Wait. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"DeviceStarted.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: chose"},"\n","^After a moment of silence, you hear a sharp beeping noise-","\n","^The device has powered up. A small microphone appears in the upper-right quadrant of your vision, next to it a small red dot, flashing on and off.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[["ev",{"^->":"DeviceStarted.0.g-0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"Hello?\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"DeviceStarted.0.g-0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^\"Come In.\" ",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"DeviceStarted.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",0,"/ev",{"VAR=":"PlayerisFormal","re":true},{"->":".^.^.^.g-1"},{"#f":5}],"c-2":["ev",{"^->":"DeviceStarted.0.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",1,"/ev",{"VAR=":"PlayerisFormal","re":true},{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["^Your voice comes out wrong- a horrible synthetic thing with scratch in all the wrong places and tone in none of them","ev",{"VAR?":"PlayerisFormal"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^, as null of emotion as your words",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^. Your unease is still obvious",{"->":".^.^.^.8"},null]}],"nop","^. This isn't you.","\n",["ev",{"^->":"DeviceStarted.0.g-1.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},0,"==","/ev",{"*":".^.^.c-3","flg":19},{"s":["^\"Is anyone there?\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"DeviceStarted.0.g-1.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},1,"==","/ev",{"*":".^.^.c-4","flg":19},{"s":["^\"I repeat, Come In.\" ",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"DeviceStarted.0.g-1.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.^.g-2"},{"#f":5}],"c-4":["ev",{"^->":"DeviceStarted.0.g-1.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^A brief moment of silence. You are alone.","\n",["ev",{"^->":"DeviceStarted.0.g-2.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^Continue to wait. ",{"->":"$r","var":true},null]}],{"c-5":["ev",{"^->":"DeviceStarted.0.g-2.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: chose"},"\n",{"->":".^.^.^.g-3"},{"#f":5}],"#f":5}],"g-3":["^Finally, something changes. You hear an omnipresent burst of static, before a voice calls out.","\n","^\"","ev",{"VAR?":"PlayerisFormal"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^I copy.",{"->":".^.^.^.10"},null]}],[{"->":".^.b"},{"b":["^I'm here.",{"->":".^.^.^.10"},null]}],"nop","^\" ",{"#":"CLASS: noraspeak"},"\n",["ev",{"^->":"DeviceStarted.0.g-3.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^\"Who is this?\" ",{"->":"$r","var":true},null]}],{"c-6":["ev",{"^->":"DeviceStarted.0.g-3.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.^.g-4"},{"#f":5}],"#f":5}],"g-4":["^\"Awfully rude for someone who hasn't ","ev",{"VAR?":"PlayerisFormal"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ identified themselves",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^answered that either",{"->":".^.^.^.8"},null]}],"nop","^, aren't you?\" ",{"#":"CLASS: noraspeak"},"\n",["ev",{"^->":"DeviceStarted.0.g-4.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},1,"==","/ev",{"*":".^.^.c-7","flg":19},{"s":["^\"Apologies. Name's Nicholas.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"DeviceStarted.0.g-4.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},1,"==","/ev",{"*":".^.^.c-8","flg":19},{"s":["^\"I suppose so.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"DeviceStarted.0.g-4.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},0,"==","/ev",{"*":".^.^.c-9","flg":19},{"s":["^\"Shoot, Right. \" ",{"->":"$r","var":true},null]}],["ev",{"^->":"DeviceStarted.0.g-4.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},0,"==","/ev",{"*":".^.^.c-10","flg":19},{"s":["^\"Not until you do.\" ",{"->":"$r","var":true},null]}],{"c-7":["ev",{"^->":"DeviceStarted.0.g-4.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",true,"/ev",{"VAR=":"NoraKnowsPlayer","re":true},"ev",{"VAR?":"NoraOpinion"},1,"+",{"VAR=":"NoraOpinion","re":true},"/ev","^\"Well, I wish I could say it was a pleasure to meet you Nicholas.\" ",{"#":"CLASS: noraspeak"},"\n","^\"The name's Nora.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.g-5"},{"#f":5}],"c-8":["ev",{"^->":"DeviceStarted.0.g-4.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"...\" ",{"#":"CLASS: noraspeak"},"\n","ev",{"VAR?":"NoraOpinion"},1,"-",{"VAR=":"NoraOpinion","re":true},"/ev","^\"Then I suppose we're at an impasse, then.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.g-5"},{"#f":5}],"c-9":["ev",{"^->":"DeviceStarted.0.g-4.c-9.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",[["ev",{"^->":"DeviceStarted.0.g-4.c-9.8.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"My name is Nicholas.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"DeviceStarted.0.g-4.c-9.8.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",true,"/ev",{"VAR=":"NoraKnowsPlayer","re":true},"ev",{"VAR?":"NoraOpinion"},1,"+",{"VAR=":"NoraOpinion","re":true},"/ev","^\"Well, Nicholas. I wish I could say nice to meet you.\" ",{"#":"CLASS: noraspeak"},"\n","^\"Name's Nora.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.^.^.g-5"},{"#f":5}]}],{"#f":5}],"c-10":["ev",{"^->":"DeviceStarted.0.g-4.c-10.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"...\"  ",{"#":"CLASS: noraspeak"},"\n","ev",{"VAR?":"NoraOpinion"},1,"-",{"VAR=":"NoraOpinion","re":true},"/ev","^\"Well, I guess neither of us get to know then.\"  ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.g-5"},{"#f":5}],"#f":5}],"g-5":["^\"I ","ev",{"VAR?":"PlayerisFormal"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ suppose ",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^ bet",{"->":".^.^.^.8"},null]}],"nop","^ you have some questions","ev",{"VAR?":"PlayerisFormal"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^.",{"->":".^.^.^.17"},null]}],[{"->":".^.b"},{"b":["^, don't you?",{"->":".^.^.^.17"},null]}],"nop","^ I","ev",{"VAR?":"NoraOpinion"},0,">","/ev",[{"->":".^.b","c":true},{"b":["^'ll answer what I can.",{"->":".^.^.^.26"},null]}],[{"->":".^.b"},{"b":["^ might answer some of them, depends on what.",{"->":".^.^.^.26"},null]}],"nop","^\" ",{"#":"CLASS: noraspeak"},"\n",["ev",{"^->":"DeviceStarted.0.g-5.30.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-11","flg":18},{"s":["^\"About what?\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"DeviceStarted.0.g-5.31.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-12","flg":18},{"s":["^\"Sure.\" ",{"->":"$r","var":true},null]}],{"c-11":["ev",{"^->":"DeviceStarted.0.g-5.c-11.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.30.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"Where you are, what we're doing. That kind of thing.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.g-6"},{"#f":5}],"c-12":["ev",{"^->":"DeviceStarted.0.g-5.c-12.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.31.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.^.g-6"},{"#f":5}],"#f":5}],"g-6":[{"->":"NoraQuestions"},{"#f":5}]}],{"#f":1}],"NoraQuestions":[["ev",{"VAR?":"NoraOpinion"},-2,"<","/ev",[{"->":".^.b","c":true},{"b":["^ \"You know, I was trying to be a dear and help you, but it's quite clear that you're not interested in that. ","ev",{"VAR?":"PlayerisFormal"},"/ev",[{"->":".^.b","c":true},{"b":["^ Best of luck.",{"->":".^.^.^.5"},null]}],"nop","^\" ",{"->":"EndDialogue"},{"->":".^.^.^.6"},null]}],"nop","^ ",{"#":"CLASS: noraspeak"},"\n","^\"",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^What do you want to know?",{"->":".^.^.17"},null],"s1":["pop",["ev","visit",4,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^What else?",{"->":".^.^.29"},null],"s1":["pop","^Anything else? ",{"->":".^.^.29"},null],"s2":["pop","^Any other questions?",{"->":".^.^.29"},null],"s3":["pop","^Something else on your mind?",{"->":".^.^.29"},null],"#f":5}],{"->":".^.^.17"},null],"#f":5}],"^\" ",{"#":"CLASS: noraspeak"},"\n",["ev",{"^->":"NoraQuestions.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"What is this place?\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestions.0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"What did they do to me?\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestions.0.17.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"AnotherComedian"},"/ev",{"*":".^.^.c-2","flg":19},{"s":["^\"'Another Comedian?' How many other people are down here?\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestions.0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"NoraKnowsPlayer"},"!","/ev",{"*":".^.^.c-3","flg":19},{"s":["^\"Who are you?\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestions.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"DeathSentence"},"!",{"VAR?":"AskedDanger"},"!","&&","/ev",{"*":".^.^.c-4","flg":19},{"s":["^\"Anything I should watch out for here?\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestions.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"DeathSentence"},{"VAR?":"AskedDanger"},"!","&&","/ev",{"*":".^.^.c-5","flg":19},{"s":["^\"A 'Death Sentence'?\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestions.0.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"NoraKnowsPlayer"},"/ev",{"*":".^.^.c-6","flg":19},{"s":["^\"Who are you, Nora?\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestions.0.22.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"AskedQuestions"},"/ev",{"*":".^.^.c-7","flg":19},{"s":["^\"I don't have anything else to ask.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestions.0.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"AskedQuestions"},"!","/ev",{"*":".^.^.c-8","flg":19},{"s":["^\"I don't have any questions.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"NoraQuestions.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",true,"/ev",{"VAR=":"AskedQuestions","re":true},{"->":"QuestionFacility"},{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"NoraQuestions.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",true,"/ev",{"VAR=":"AskedQuestions","re":true},{"->":"QuestionBody"},{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"NoraQuestions.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.17.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",true,"/ev",{"VAR=":"AskedQuestions","re":true},{"->":"QuestionPeople"},{"->":".^.^.g-0"},{"#f":5}],"c-3":["ev",{"^->":"NoraQuestions.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.18.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",true,"/ev",{"VAR=":"AskedQuestions","re":true},{"->":"QuestionNora"},{"->":".^.^.g-0"},{"#f":5}],"c-4":["ev",{"^->":"NoraQuestions.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",true,"/ev",{"VAR=":"AskedDanger","re":true},"ev",true,"/ev",{"VAR=":"AskedQuestions","re":true},{"->":"QuestionDanger"},{"->":".^.^.g-0"},{"#f":5}],"c-5":["ev",{"^->":"NoraQuestions.0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",true,"/ev",{"VAR=":"AskedDanger","re":true},"ev",true,"/ev",{"VAR=":"AskedQuestions","re":true},{"->":"QuestionDanger"},{"->":".^.^.g-0"},{"#f":5}],"c-6":["ev",{"^->":"NoraQuestions.0.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",true,"/ev",{"VAR=":"AskedQuestions","re":true},{"->":"QuestionNoraDeeper"},{"->":".^.^.g-0"},{"#f":5}],"c-7":["ev",{"^->":"NoraQuestions.0.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.22.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"Understood. ","ev",{"VAR?":"NoraOpinion"},0,">","/ev",[{"->":".^.b","c":true},{"b":["^  Good luck out there, feel free to call whenever you're safe.",{"->":".^.^.^.15"},null]}],"nop","^\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-8":["ev",{"^->":"NoraQuestions.0.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"","ev",{"VAR?":"NoraOpinion"},0,">","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"PlayerisFormal"},"/ev",[{"->":".^.b","c":true},{"b":["^That's a poor idea, I have information you don't on how to survive. ",{"->":".^.^.^.5"},null]}],[{"->":".^.b"},{"b":["^That's stupid of you. You won't last out there without some knowledge of what you're getting into.",{"->":".^.^.^.5"},null]}],"nop",{"->":".^.^.^.16"},null]}],[{"->":".^.b"},{"b":["^ Understood.",{"->":".^.^.^.16"},null]}],"nop","^\" ",{"#":"CLASS: noraspeak"},"\n",[["ev",{"^->":"NoraQuestions.0.c-8.20.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"NoraOpinion"},0,">","/ev",{"*":".^.^.c-0","flg":19},{"s":["^\"I think I've got this.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestions.0.c-8.20.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"NoraOpinion"},0,">","/ev",{"*":".^.^.c-1","flg":19},{"s":["^\"Actually, I may have something to ask.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"NoraQuestions.0.c-8.20.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"Understood. Good luck out there, feel free to call if you change your mind.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":"EndDialogue"},{"->":".^.^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"NoraQuestions.0.c-8.20.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.^.^.^"},{"->":".^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"g-0":[{"->":"EndDialogue"},{"#f":5}]}],{"#f":1}],"EndDialogue":["^With another burst of static, ","ev",{"VAR?":"NoraKnowsPlayer"},"/ev",[{"->":".^.b","c":true},{"b":["^ Nora",{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["^the person on the other end",{"->":".^.^.^.6"},null]}],"nop","^ falls silent. You are alone again.","\n","done",{"#f":1}],"QuestionFacility":[["ev",{"VAR?":"NoraOpinion"},0,"<","/ev",[{"->":".^.b","c":true},{"b":["^ \"Did you read any of the papers you signed? ",{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["^\"",{"->":".^.^.^.7"},null]}],"nop","^This place is the old Hollistix facility. Used to be AHS, tried to sell people those robot shells they shoved us in. Before even my time.\" ",{"#":"CLASS: noraspeak"},"\n",["ev",{"^->":"QuestionFacility.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},"/ev",{"*":".^.^.c-0","flg":19},{"s":["^\"It's certainly fancy.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionFacility.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},"!","/ev",{"*":".^.^.c-1","flg":19},{"s":["^\"Snazzy place.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionFacility.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"QuestionFacility.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev",{"VAR?":"NoraOpinion"},0,"<","/ev",[{"->":".^.b","c":true},{"b":["^\"Sure Is.\"",{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["^\"You haven't seen the half of it. This place is massive- and a death sentence.\" ",{"->":"DSUnlock"},{"->":".^.^.^.7"},null]}],"nop","^ ",{"#":"CLASS: noraspeak"},"\n",{"->":"NoraQuestions"},{"#f":5}]}],{"#f":1}],"DSUnlock":["ev",true,"/ev",{"VAR=":"DeathSentence","re":true},{"->":"NoraQuestions"},{"#f":1}],"QuestionNora":[["^\"Again, you haven't exactly told me your name either. You want to know? Tell me first.\" ",{"#":"CLASS: noraspeak"},"\n",["ev",{"^->":"QuestionNora.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"Fine.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionNora.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"Absolutely not.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionNora.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",[["ev",{"^->":"QuestionNora.0.c-0.8.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"Name's Nicholas.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionNora.0.c-0.8.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",true,"/ev",{"VAR=":"NoraKnowsPlayer","re":true},"^\"Well great to meet you Nicholas. I'm Nora. Was that so hard?\" ",{"#":"CLASS: noraspeak"},"\n",[["ev",{"^->":"QuestionNora.0.c-0.8.c-0.15.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"Not particularly, no.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionNora.0.c-0.8.c-0.15.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Stay silent. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionNora.0.c-0.8.c-0.15.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"You're a funny one, aren't you?\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"QuestionNora.0.c-0.8.c-0.15.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"QuestionNora.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",{"VAR?":"NoraOpinion"},1,"-",{"VAR=":"NoraOpinion","re":true},"/ev","^\"I guess we aren't going to get anywhere then.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"NoraQuestions"},{"#f":5}]}],{"#f":1}],"NoneB":["ev",1,"/ev",{"VAR=":"NoneOfBusiness","re":true},{"->":"QuestionNoraDeeper"},{"#f":1}],"QuestionNoraDeeper":[[["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^\"Well, you know my name, but I'm guessing that's not what you mean. is it?\"",{"->":".^.^.17"},null],"s1":["pop",{"->":".^.^.17"},null],"#f":5}],"\n",["ev",{"^->":"QuestionNoraDeeper.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"Why are you down here?\"  ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionNoraDeeper.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"How long have you been here?\"  ",{"->":"$r","var":true},null]}],{"*":".^.c-2","flg":24},{"c-0":["ev",{"^->":"QuestionNoraDeeper.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",{"VAR?":"NoraOpinion"},1,">","/ev",[{"->":".^.b","c":true},{"b":["^ \"Same as you, I'm guessing. A fast out.\"",{"->":".^.^.^.15"},null]}],[{"->":".^.b"},{"b":["^\"None of your business.\" ",{"->":"NoneB"},{"->":".^.^.^.15"},null]}],"nop","^ ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"QuestionNoraDeeper.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"Around two weeks now.\" ",{"#":"CLASS: noraspeak"},"\n",[["ev",{"^->":"QuestionNoraDeeper.0.c-1.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^That little?  ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionNoraDeeper.0.c-1.11.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^So you're new here too?   ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionNoraDeeper.0.c-1.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"QuestionNoraDeeper.0.c-1.11.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^\"Ha! Most people last less. I'm practically a veteran.\" ",{"#":"CLASS: noraspeak"},"\n",["ev",{"^->":"QuestionNoraDeeper.0.c-1.11.g-0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^\"Christ.\" ",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"QuestionNoraDeeper.0.c-1.11.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",{"VAR?":"NoraOpinion"},1,"+",{"VAR=":"NoraOpinion","re":true},"/ev","ev",{"VAR?":"PlayerisFormal"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^\"Using the lord's name in vain? How *scandalous*.\"",{"->":".^.^.^.21"},null]}],[{"->":".^.b"},{"b":["^\"I said the same.\"",{"->":".^.^.^.21"},null]}],"nop","^ ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.^.^.^"},{"#f":5}],"#f":5}]}],{"#f":5}],"c-2":[{"->":"NoraQuestionsYou"},"\n",{"->":"NoraQuestions"},{"#f":5}]}],{"#f":1}],"NoraQuestionsYou":[["^\"Enough about me though. What's your deal?\" ",{"#":"CLASS: noraspeak"},"\n",["ev",{"^->":"NoraQuestionsYou.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},1,"==","/ev",{"*":".^.^.c-0","flg":19},{"s":["^I'd rather not talk about it. ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestionsYou.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},0,"==",{"VAR?":"NoneOfBusiness"},"!","&&","/ev",{"*":".^.^.c-1","flg":19},{"s":["^\"I don't want to talk about it.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestionsYou.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},0,"==",{"VAR?":"NoneOfBusiness"},"&&","/ev",{"*":".^.^.c-2","flg":19},{"s":["^\"None of your business.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestionsYou.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"NoraOpinion"},-1,"<=","/ev",{"*":".^.^.c-3","flg":19},{"s":["^\"Got framed. Didn't want to go to jail.\"",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestionsYou.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"NoraOpinion"},-1,">","/ev",{"*":".^.^.c-4","flg":19},{"s":["^\"Got framed. Didn't want to go to jail.\"  ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"NoraQuestionsYou.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"After I bore my heart to you? For shame.\" ",{"#":"CLASS: noraspeak"},"\n",[["ev",{"^->":"NoraQuestionsYou.0.c-0.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"You haven't exactly told me much either.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"NoraQuestionsYou.0.c-0.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"Let me have my contradictions.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"NoraQuestionsYou.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"After I bore my heart to you? For shame.\" ",{"#":"CLASS: noraspeak"},"\n",[["ev",{"^->":"NoraQuestionsYou.0.c-1.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"You haven't exactly told me much either\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"NoraQuestionsYou.0.c-1.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"Let me have my contradictions.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"NoraQuestionsYou.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"Touche.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-3":["ev",{"^->":"NoraQuestionsYou.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","^\"What was that old movie quote? 'Everyone's innocent here' or something.\" ",{"#":"CLASS: noraspeak"},"\n",[["ev",{"^->":"NoraQuestionsYou.0.c-3.10.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"Rude.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestionsYou.0.c-3.10.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"Are you seriously calling me a liar?\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"NoraQuestionsYou.0.c-3.10.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"NoraQuestionsYou.0.c-3.10.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"Not exactly, close enough though.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-4":["ev",{"^->":"NoraQuestionsYou.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"Well isn't that unfortunate.\" ",{"#":"CLASS: noraspeak"},"\n",[["ev",{"^->":"NoraQuestionsYou.0.c-4.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"Yeah.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"NoraQuestionsYou.0.c-4.11.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"No, I'm actually quite happy to be here.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"NoraQuestionsYou.0.c-4.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"NoraQuestionsYou.0.c-4.11.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",{"VAR?":"NoraOpinion"},1,"+",{"VAR=":"NoraOpinion","re":true},"/ev","ev",true,"/ev",{"VAR=":"AnotherComedian","re":true},"^\"Great, another comedian.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"g-0":[{"->":"NoraQuestions"},{"#f":5}]}],{"#f":1}],"QuestionBody":[["^\"The new body? They took you apart and put you back together again.","ev",{"VAR?":"NoraOpinion"},1,"<","/ev",[{"->":".^.b","c":true},{"b":["^\"",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^ Personally, I love it.","ev",{"VAR?":"NoraOpinion"},3,">","/ev",[{"->":".^.b","c":true},{"b":["^ All the scars are gone, and I can lift heavy things.\"",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^ Feel like I'm 20 again.\"",{"->":".^.^.^.8"},null]}],"nop",{"->":".^.^.^.8"},null]}],"nop","^ ",{"#":"CLASS: noraspeak"},"\n",["ev",{"^->":"QuestionBody.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"I love it.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionBody.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"I hate it.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionBody.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",[["ev",{"^->":"QuestionBody.0.c-0.8.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"I feel so much more in control.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionBody.0.c-0.8.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"I finally have the body I wanted.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionBody.0.c-0.8.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",{"VAR?":"NoraOpinion"},0,"<","/ev",[{"->":".^.b","c":true},{"b":["^\"Good for you.\"",{"->":".^.^.^.15"},null]}],[{"->":".^.b"},{"b":["^\"It does feel nice, doesn't it?\"",{"->":".^.^.^.15"},null]}],"nop","^ ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"QuestionBody.0.c-0.8.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",{"VAR?":"NoraOpinion"},1,"<","/ev",[{"->":".^.b","c":true},{"b":["^\"Good for you.\"",{"->":".^.^.^.15"},null]}],[{"->":".^.b"},{"b":["^\"You didn't before? What changed?\"",{"->":".^.^.^.15"},null]}],"nop","^ ",{"#":"CLASS: noraspeak"},"\n",[["ev",{"^->":"QuestionBody.0.c-0.8.c-1.19.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},"!","/ev",{"*":".^.^.c-0","flg":19},{"s":["^\"None of your business.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionBody.0.c-0.8.c-1.19.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"PlayerisFormal"},"/ev",{"*":".^.^.c-1","flg":19},{"s":["^\"I'd rather not say.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionBody.0.c-0.8.c-1.19.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.^.^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"QuestionBody.0.c-0.8.c-1.19.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"QuestionBody.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",[["ev",{"^->":"QuestionBody.0.c-1.8.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"This isn't my body.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionBody.0.c-1.8.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"It feels wrong.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionBody.0.c-1.8.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",{"VAR?":"NoraOpinion"},0,"<","/ev",[{"->":".^.b","c":true},{"b":["^\"Too bad.\"",{"->":".^.^.^.15"},null]}],[{"->":".^.b"},{"b":["^\"That's certainly a shame.\"",{"->":".^.^.^.15"},null]}],"nop","^ ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"QuestionBody.0.c-1.8.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",{"VAR?":"NoraOpinion"},0,"<","/ev",[{"->":".^.b","c":true},{"b":["^\"Too bad.\"",{"->":".^.^.^.15"},null]}],[{"->":".^.b"},{"b":["^\"It can take a while to get used to it. Not needing to breathe is nice though.\"",{"->":".^.^.^.15"},null]}],"nop","^ ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"g-0":["^\"Regardless, make sure you get used to moving around. The proportions might be different, and bumping around down here is a death sentence.\" ",{"#":"CLASS: noraspeak"},"\n","ev",true,"/ev",{"VAR=":"DeathSentence","re":true},{"->":"NoraQuestions"},{"#f":5}]}],{"#f":1}],"QuestionPeople":[["^\"It's just Anthony and I right now. Other people might come down here, but I don't bother remembering names for at least a few days","ev",{"VAR?":"NoraOpinion"},0,">","/ev",[{"->":".^.b","c":true},{"b":["^, no offense.\"",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^.\"",{"->":".^.^.^.8"},null]}],"nop","^ ",{"#":"CLASS: noraspeak"},"\n",["ev",{"^->":"QuestionPeople.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"Who's Anthony?\"  ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionPeople.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"I see.\"  ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionPeople.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"Nice kid. Been down here for around a week now.\" ",{"#":"CLASS: noraspeak"},"\n",[["ev",{"^->":"QuestionPeople.0.c-0.11.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"That long? What did he do?\"  ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionPeople.0.c-0.11.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"Must be in for something rough.\"  ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionPeople.0.c-0.11.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"Nothing much, actually. You can get extended time for damaging the facility.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"QuestionPeople.0.c-0.11.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"I wouldn't say that, You can get extended time for damaging the facility.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^\"He was a street artist. ","ev",{"VAR?":"NoraOpinion"},0,">","/ev",[{"->":".^.b","c":true},{"b":["^ If you want to know more, talk to him.",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^ Ask him instead.",{"->":".^.^.^.8"},null]}],"nop","^\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"QuestionPeople.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"NoraQuestions"},{"#f":5}]}],{"#f":1}],"QuestionDanger":[["^\"I know you probably didn't think much of the job. But it is risky. Nothing with that high of a work-year ratio would be safe.\" ",{"#":"CLASS: noraspeak"},"\n","^\"There's something down here- I don't really know what, but I've seen glimpses of it a few times. I think it's been watching me.\" ",{"#":"CLASS: noraspeak"},"\n",["ev",{"^->":"QuestionDanger.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"What could be down here? We're miles below the surface.\" ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionDanger.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"Aren't you a little old to see monsters under the bed?\"  ",{"->":"$r","var":true},null]}],["ev",{"^->":"QuestionDanger.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^\"Huh.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"QuestionDanger.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","^\"I'm not sure. Keep your eyes peeled.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"QuestionDanger.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n","ev",{"VAR?":"NoraOpinion"},1,"-",{"VAR=":"NoraOpinion","re":true},"/ev","^\"Do you want this advice or not?\" ",{"#":"CLASS: noraspeak"},"\n",{"->":"NoraQuestions"},{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"QuestionDanger.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],{"#":"CLASS: playerspeak"},"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^\"There's also mold around, spreads through the ducts, it's pretty ","ev",{"VAR?":"PlayerisFormal"},"/ev",[{"->":".^.b","c":true},{"b":["^ damn",{"->":".^.^.^.5"},null]}],"nop","^ corrosive- I'd suggest you stay away from it.\" ",{"#":"CLASS: noraspeak"},"\n",{"->":"NoraQuestions"},{"#f":5}]}],{"#f":1}],"global decl":["ev",0,{"VAR=":"PlayerisFormal"},0,{"VAR=":"NoraOpinion"},false,{"VAR=":"NoraKnowsPlayer"},false,{"VAR=":"AskedQuestions"},false,{"VAR=":"NoneOfBusiness"},false,{"VAR=":"AnotherComedian"},false,{"VAR=":"DeathSentence"},false,{"VAR=":"AskedDanger"},"/ev","end",null],"#f":1}],"listDefs":{}};