angular.module('app').run(['$templateCache', function ($templateCache) {
	$templateCache.put('/views/0000.html', '<div class="row"> <div class="col col-md-12"> <a href="/izumrud" class="izumrud"></a> </div> <div class="clearfix"></div> <div class="col col-md-12"> <div class="col col-md-3 sidebar"> <div class="v_menu"> <h3><a href="/izumrud">офисный центр - <strong>IZUMRUD</a></strong></h3> <h3><a href="/skyroom">party-club - <strong>SKYROOM</a></strong></h3> <h3><a href="/beefeater">art-pub - <strong>BEEFEATER</a></strong></h3> </div> <div class="baner"> <p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст." Це робить текст схожим на оповідний. Багато програм верстування та веб-дизайну використовують Lorem Ipsum як зразок і пошук за терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться ще в зародковому стані. Різні версії Lorem Ipsum з\'явились за минулі роки, деякі випадково, деякі було створено зумисно (зокрема, жартівливі).</p> </div> </div> <div class="col col-md-9 content" bz-loading-container="loading"> <div class="mainpage"> <nav class="navbar navbar-inverse h_menu" role="navigation"> <div class="container"> <div class="main-menu"> <div bz-widget="\'bcMenu.Widgets.Menu\'" data-settings="{ \'id\': 22 }"></div> </div> </div> </nav> <div class="slider"><img src="http://izumrud.ua2.biz/uploads/files/3c/0b/3c0b761262f16dfb8decae16e75fe116.jpg" alt=""/></div> </div> </div> </div> <div class="clearfix"></div> </div>');
	$templateCache.put('/views/beefeater.html', '<div class="row"> <div class="col col-md-3"> <a href="/beefeater" class="beefeater"></a> </div> <div class="col col-md-9 header-link"> <a href="/">party-club | анонс</a> </div> <div class="clearfix"></div> <div class="col col-md-3" style="padding-left: 0"> <div class="v_menu"> <h3><a href="/izumrud">офисный центр - <strong>IZUMRUD</a></strong></h3> <h3><a href="/skyroom">party-club - <strong>SKYROOM</a></strong></h3> <h3><a href="/beefeater">art-pub - <strong>BEEFEATER</a></strong></h3> </div> <div class="baner"> <p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст." Це робить текст схожим на оповідний. Багато програм верстування та веб-дизайну використовують Lorem Ipsum як зразок і пошук за терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться ще в зародковому стані. Різні версії Lorem Ipsum з\'явились за минулі роки, деякі випадково, деякі було створено зумисно (зокрема, жартівливі).</p> </div> <div class="discount"> <a href="/"><img src="assets/img/discount.png" alt=""/></a> <a href="/"><img src="assets/img/dresscod.png" alt=""/></a> </div> </div> <div class="col col-md-9 content" bz-loading-container="loading" style="padding: 0"> <div class="mainpage"> <nav class="navbar navbar-inverse h_menu" role="navigation"> <div class="main-menu"> <div bz-widget="\'bcMenu.Widgets.Menu\'" data-settings="{ \'id\': 22 }"></div> </div> </nav> <div class="slider"><img src="http://izumrud.ua2.biz/uploads/files/3c/0b/3c0b761262f16dfb8decae16e75fe116.jpg" alt=""/></div> </div> </div> <div class="clearfix"></div> </div>');
	$templateCache.put('/views/block/comments.html', '<div ng-if="page.is_allow_comments"> <div bz-comments="page.id"></div> </div>');
	$templateCache.put('/views/block/footer.html', '<div class="container"> <div class="row-fluid"> <div class="span8"> <div class="row-fluid"> <div class="span3 copyright"> &copy; 2013 demo.bazalt-cms </div> <div class="span9 footer-menu"> <div bz-widget="\'bcMenu.Widgets.Menu\'" data-settings="{ \'id\': 78 }"></div> </div> </div> </div> <div class="span4 developers"> </div> </div> </div>');
	$templateCache.put('/views/block/header.html', '<div class="container"> <div class="row"> <div class="logo span4"> <a href="/" title=""><img src="/assets/img/logo.png" alt="" title=""/></a> </div> <div class="span8 navbar main-menu"> <div class="navbar-inner pull-right"> <div class="container"> <div class="b-main-menu" bz-widget="\'bcMenu.Widgets.Menu\'" data-settings="{ \'id\': 4, template: \'/\' }"> </div> </div> </div> </div> </div> </div>');
	$templateCache.put('/views/block/sidebar.html', '<div class="block news"> </div> <div class="block social"> <div vk-group="24391510" data-settings="{mode: 0, height: 320}"></div> </div> ');
	$templateCache.put('/views/block/summary.html', '<div class="summary clearfix"> <div class="block label label-info view pull-right"> <i class="icon-eye-open"></i> {{ page.hits }} </div> <div class="block label label-info view pull-right" ng-if="page.is_allow_comments"> <i class="icon-comment"></i> {{ page.comments_count }} </div> <div class="block" ng-if="showMore"> <a smooth-scroll data-target="top" ng-href="{{ page.url }}" title="{{page.title|language}}" class="read-more btn btn-xs btn-default"><i class="icon-hand-right"></i> Читать далее</a> </div> <div class="date label label-primary pull-right"><i class="icon-calendar"></i> {{ page.created_at|date:\'dd.MM.yyyy\' }} </div> <div class="block"> <div bz-rating="page.rating"></div> </div> <div class="block"> <span class=\'st_facebook\'></span> <span class=\'st_vkontakte\'></span> <span class=\'st_twitter\'></span> </div> </div>');
	$templateCache.put('/views/index.html', '<div class="row"> <div class="col col-lg-12"> <div class="main_menu"> <a href="/izumrud" class="izumrud"></a> <a href="/skyroom" class="skyroom"></a> <a href="/beefeater" class="beefeater"></a> </div> </div> <div class="main_menu_g"> <a href="/izumrud" class="m_category"><img src="assets/img/izumrud.jpg" alt=""/></a> <a href="/skyroom" class="m_category"><img src="assets/img/skyroom.jpg" alt=""/></a> <a href="/beefeater" class="m_category"><img src="assets/img/beefeater.jpg" alt=""/></a> </div> <div class="clearfix"></div> <div class="banner"> <a href="/"><img src="assets/img/banner.png" alt=""/></a> </div> <div class="clearfix"></div> <div class="discount"> <a href="/"><img src="assets/img/discount.png" alt=""/></a> <a href="/"><img src="assets/img/dresscod.png" alt=""/></a> </div> <div class="clearfix"></div> </div>');
	$templateCache.put('/views/izumrud.html', '<div class="row"> <div class="col col-md-3"> <a href="/izumrud" class="izumrud"></a> </div> <div class="col col-md-9 header-link"> <a href="/">party-club | анонс</a> </div> <div class="clearfix"></div> <div class="col col-md-3" style="padding-left: 0"> <div class="v_menu"> <h3><a href="/izumrud">офисный центр - <strong>IZUMRUD</strong></a></h3> <h3><a href="/skyroom">party-club - <strong>SKYROOM</strong></a></h3> <h3><a href="/beefeater">art-pub - <strong>BEEFEATER</strong></a></h3> </div> <div class="baner"> <p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст." Це робить текст схожим на оповідний. Багато програм верстування та веб-дизайну використовують Lorem Ipsum як зразок і пошук за терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться ще в зародковому стані. Різні версії Lorem Ipsum з\'явились за минулі роки, деякі випадково, деякі було створено зумисно (зокрема, жартівливі).</p> </div> <div class="discount"> <a href="/"><img src="assets/img/discount.png" alt=""/></a> <a href="/"><img src="assets/img/dresscod.png" alt=""/></a> </div> </div> <div class="col col-md-9 content" bz-loading-container="loading" style="padding: 0"> <div class="mainpage"> <nav class="navbar navbar-inverse h_menu" role="navigation"> <div class="main-menu"> <div bz-widget="\'bcMenu.Widgets.Menu\'" data-settings="{ \'id\': 22 }"></div> </div> </nav> <div class="slider"><img src="http://izumrud.ua2.biz/uploads/files/3c/0b/3c0b761262f16dfb8decae16e75fe116.jpg" alt=""/></div> <div class="s_page" bz-widget="\'bcPages.Widgets.Page\'" data-settings="{\'id\': 114 }"></div> <div bz-widget="\'bcPages.Widgets.Page\'" data-settings="{\'zid\': 114, templateUrl: \'/views/widgets/pages/slider.html\' }"></div> </div> </div> <div class="clearfix"></div> </div>');
	$templateCache.put('/views/layout.html', '<link href=\'http://fonts.googleapis.com/css?family=Ubuntu+Condensed&subset=latin,cyrillic\' rel=\'stylesheet\' type=\'text/css\'> <div class="line-black"></div>' +
'<div class="container-fluid header" ng-include="\'/views/block/header.html\'"> </div>' +
'<div class="container-fluid main"> <div class="container"> <div class="container"> <div class="row-fluid"> <div class="col-lg-8 content" bz-loading-container="loading"> <div id="top" class="slide-reveal" app-view-segment="1"></div> </div> <div class="col-lg-4 sidebar" ng-include="\'/views/block/sidebar.html\'"> </div> </div> </div> </div> </div>' +
'<div class="container-fluid footer" ng-include="\'/views/block/footer.html\'"> </div>' +
'');
	$templateCache.put('/views/pages/category.html', '<div class="slide-reveal category"> <div data-widget="\'Components.Pages.Widgets.Page\'" data-settings="{ \'id\': 11 }"></div> <h1>{{category.title|language}}</h1> <div class="main-feed" ng-include="\'/views/widgets/pages/category.html\'"></div> </div>');
	$templateCache.put('/views/pages/corousel.html', '<div class="slide-reveal carousel"> <div bz-carousel="page.images"></div> </div>');
	$templateCache.put('/views/pages/default.html', '<div class="row"> <div class="col col-lg-3 sidebar"> <div bz-widget="\'bcPages.Widgets.Category\'" data-settings="{ \'category_id\': page.category_id, templateUrl: \'/views/widgets/pages/category/menu.html\' }"></div> </div> <div class="col col-lg-9 content" bz-loading-container="loading"> <div class="default slide-reveal" app-view-segment="1"> <h1>{{page.title|language}}</h1> <ul class="breadcrumb"> <li class="main-page"> <a href="/">Главная</a> </li> <li ng-repeat="crumb in page.breadcrumbs"> <a ng-href="{{ crumb.$url }}">{{ crumb.title|language }}</a> <span ng-if="!$last" class="divider">/</span> </li> </ul> <div class="body" ng-bind-html="page.body.en"></div> <div bz-img="page.images"></div> <div ng-include="\'/views/block/summary.html\'"></div> <div ng-include="\'/views/block/comments.html\'"></div> </div> </div> <div class="clearfix"></div> </div>');
	$templateCache.put('/views/pages/gallery.html', '<div class="row"> <div class="col col-lg-3 sidebar"> <div class="v_menu"> <h3><a href="/post-26">офисный центр - <strong>IZUMRUD</a></strong></h3> <h3><a href="/post-25">party-club - <strong>SKYROOM</a></strong></h3> <h3><a href="/post-24">art-pub - <strong>BEEFEATER</a></strong></h3> </div> <div class="baner"> <p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст." Це робить текст схожим на оповідний. Багато програм верстування та веб-дизайну використовують Lorem Ipsum як зразок і пошук за терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться ще в зародковому стані. Різні версії Lorem Ipsum з\'явились за минулі роки, деякі випадково, деякі було створено зумисно (зокрема, жартівливі).</p> </div> </div> <div class="col col-lg-9 content" bz-loading-container="loading"> <div class="mainpage"> <nav class="navbar navbar-inverse h_menu" role="navigation"> <div class="container"> <div class="main-menu"> <div bz-widget="\'bcMenu.Widgets.Menu\'" data-settings="{ \'id\': 22 }"></div> </div> </div> </nav> <div class="slider"><img src="http://izumrud.ua2.biz/uploads/files/3c/0b/3c0b761262f16dfb8decae16e75fe116.jpg" alt=""/></div> </div> </div> <div class="clearfix"></div> </div>');
	$templateCache.put('/views/pages/photo.html', '<div class="slide-reveal photo"> <div> <a class="h1" href="/c-photo">Фото</a> </div> <img ng-src="{{ page.images.0.url }}"/> <h1 class="heading text-center">{{page.title|language}}</h1> <div class="body description description-photo" ng-bind-html="page.body.en"></div> <div ng-include="\'/views/block/summary.html\'"></div> <div ng-include="\'/views/block/comments.html\'"></div> </div>');
	$templateCache.put('/views/skyroom.html', '<div class="row"> <div class="col col-md-3"> <a href="/skyroom" class="skyroom"></a> </div> <div class="col col-md-9 header-link"> <a href="/">party-club | анонс</a> </div> <div class="clearfix"></div> <div class="col col-md-3" style="padding-left: 0"> <div class="v_menu"> <h3><a href="/izumrud">офисный центр - <strong>IZUMRUD</a></strong></h3> <h3><a href="/skyroom">party-club - <strong>SKYROOM</a></strong></h3> <h3><a href="/beefeater">art-pub - <strong>BEEFEATER</a></strong></h3> </div> <div class="baner"> <p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст." Це робить текст схожим на оповідний. Багато програм верстування та веб-дизайну використовують Lorem Ipsum як зразок і пошук за терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться ще в зародковому стані. Різні версії Lorem Ipsum з\'явились за минулі роки, деякі випадково, деякі було створено зумисно (зокрема, жартівливі).</p> </div> <div class="discount"> <a href="/"><img src="assets/img/discount.png" alt=""/></a> <a href="/"><img src="assets/img/dresscod.png" alt=""/></a> </div> </div> <div class="col col-md-9 content" bz-loading-container="loading" style="padding: 0"> <div class="mainpage"> <nav class="navbar navbar-inverse h_menu" role="navigation"> <div class="main-menu"> <div bz-widget="\'bcMenu.Widgets.Menu\'" data-settings="{ \'id\': 22 }"></div> </div> </nav> <div class="slider"><img src="http://izumrud.ua2.biz/uploads/files/3c/0b/3c0b761262f16dfb8decae16e75fe116.jpg" alt=""/></div> </div> </div> <div class="clearfix"></div> </div>');
	$templateCache.put('/views/user/account/activationResentMessage.html', '<h1>Activation Link Resent</h1><p>Check your email for a new activation link </p>');
	$templateCache.put('/views/user/account/loginForm.html', '<div class="loginForm"> <form class="form-horizontal" name="login" ng-submit="loginUser(user)" novalidate> <div ng-show="error" class="alert alert-error"> <a data-dismiss="alert" class="close">×</a> <div ng-bind-html-unsafe="error"></div> </div> <fieldset> <label for="email" class="control-label col col-lg-3">E-mail<span class="star">*</span></label> <div class="controls col col-lg-3"> <input id="email" ng-model="user.email" type="text" name="email" required="required" class="form-control"/> <span ng-show="login.email.$error.email" class="help-block"><small>Будь ласка, введіть діючий e-mail.</small></span> <span ng-show="login.email.$error.exist_user" class="help-block"><small>Невірний логін або пароль</small></span> </div> </fieldset> <fieldset> <label for="password" class="control-label col col-lg-3">Пароль<span class="star">*</span></label> <div class="controls col col-lg-3"> <input id="password" ng-model="user.password" type="password" name="password" required="required" class="form-control"/> <a href="#!/user/recovery" id="forgot-password"><small>Забули пароль?</small></a> </div> </fieldset> <fieldset> <div class="controls col col-lg-3 col-offset-3"> <label class="checkbox"> <small>Запам\'ятати мене</small> <input id="remember_me" ng-model="user.remember_me" type="checkbox" name="remember_me" checked="true" class="optional"/> </label> </div> </fieldset> <fieldset> <div class="controls col col-lg-3 col-offset-3"> <button id="btn-login" ng-click="loginUser()" class="btn btn-primary"><i class="icon-lock icon-white"></i>&nbsp; Увійти</button> </div> </fieldset> </form> </div>');
	$templateCache.put('/views/user/account/registerForm.html', '<div class="registration"> <h1>Реєстрація</h1> <div ng-if="formError"> {{formError}} </div> <form class="registration form-horizontal" name="register" ng-submit="saveUser(user)" novalidate> <fieldset ng-class="{ \'has-error\': (register.email.$dirty && register.email.$invalid) || formError.email}"> <label class="control-label col col-lg-3">E-mail<span class="star">*</span></label> <div class="controls col col-lg-9"> <input class="form-control" type="email" placeholder="Введіть Ваш e-mail" ng-model="user.email" ng-unique="checkEmail($value)" name="email" required> <div class="ng-cloak help-block" ng-show="register.email.$dirty && register.email.$error.email"> Невірний e-mail </div> <div class="ng-cloak help-block" ng-show="register.email.$dirty && register.email.$error.unique"> Користувач з таким email вже зареєстрований </div> </div> </fieldset> <fieldset ng-class="{ \'has-error\': register.password.$dirty && register.password.$invalid }"> <label class="control-label col col-lg-3" for="sign-up-password">Пароль<span class="star">*</span></label> <div class="controls col col-lg-9"> <input class="form-control" placeholder="Пароль" id="sign-up-password" name="password" type="password" ng-model="user.password" ng-required="true" ng-minlength="6" ng-maxlength="10"/> <div class="ng-cloak help-block" ng-show="register.password.$dirty && register.password.$invalid"> <span ng-show="register.password.$error.minlength">Пароль має бути більше 6 символів</span> <span ng-show="register.password.$error.maxlength">Пароль має не більше 10 символів</span> </div> </div> </fieldset> <fieldset ng-class="{ \'has-error\': register.spassword.$dirty && register.spassword.$invalid }"> <label class="control-label col col-lg-3">Підтвердити пароль<span class="star">*</span></label> <div class="controls col col-lg-9"> <input class="form-control" placeholder="Повторно введіть пароль" name="spassword" type="password" ng-required bv-compare="user.password" ng-model="user.spassword"/> <div class="ng-cloak help-block" ng-show="register.spassword.$dirty && register.spassword.$invalid"> <span ng-show="register.spassword.$error.bvCompare">Паролі не співпадають</span> </div> </div> </fieldset> <fieldset> <label class="control-label col col-lg-3">Имя:</label> <div class="controls col col-lg-9"> <input type="text" placeholder="Введите имя…" ng-model="user.firstname"> </div> </fieldset> <fieldset> <label class="control-label col col-lg-3">Фамилия:</label> <div class="controls col col-lg-9"> <input type="text" placeholder="Введите фамилию…" ng-model="user.secondname"> </div> </fieldset> <fieldset> <label class="control-label col col-lg-3">Дата народження</label> <div class="controls col col-lg-9"> <div class="input-append date" id="dpYears" data-date="01-01-1980" data-date-format="dd-mm-yyyy" data-date-start-view="2"> <input class="col-lg-2" size="16" type="text" ng-model="user.birth_date"/> <span class="add-on"><i class="icon-calendar"></i></span> </div> </div> </fieldset> <fieldset> <label class="control-label col col-lg-3">Місто<span class="star">*</span></label> <div class="controls col col-lg-9"> <input type="text" placeholder="Город…" ng-model="user.city"> </div> </fieldset> <fieldset> <div class="controls col col-lg-9 col-offset-3"> <label class="checkbox"> <input id="tandc" ng-model="form.tandc" type="checkbox" name="tandc" ng-true-value="agreed" required="required" class="check_boxes"/> Я згоден з <a href="modals/terms" data-target="#myModal" data-toggle="modal">Terms of Use</a> </label> </div> </fieldset> <fieldset> <div class="controls col col-lg-9 col-offset-3"> <button ng-disabled="register.$invalid || loading" ng-click="registerUser(user)" class="btn btn-primary"> <span ng-hide="loading">Зареєстуватись</span> <span ng-show="loading">Реєстрація...</span> </button> </div> </fieldset> {{user|json}} </form> </div>');
	$templateCache.put('/views/user/account/registerSuccessMessage.html', '<h2>Successfully Regisered</h2><p>Check your email for your account activation code</p>');
	$templateCache.put('/views/user/account/resendActivationForm.html', '<form name="activationForm" class="well"><h1>Resend Activation Link</h1><input id="csrf" type="hidden" name="_csrf" ng-model="form._csrf" mp-value-copy="mp-value-copy"/><div ng-show="error" class="alert alert-error"><a data-dismiss="alert" class="close">×</a><div ng-bind-html-unsafe="error"></div></div><div class="control-group"><label for="email" class="control-label">Email</label><div class="controls"><input id="email" ng-model="form.email" type="email" name="email" required="required" class="span3"/><span ng-show="activationForm.email.$error.email" class="help-block">Please enter a valid email.</span></div></div><button id="btn-login" ng-click="resendActivation()" ng-disabled="activationForm.$invalid || isUnchanged(form)" class="btn btn-primary"><i class="icon-lock icon-white"> </i>&nbsp; Sign in</button>&nbsp; or <a href="/login" class="show-signup">cancel</a></form>');
	$templateCache.put('/views/user/profile.html', '<h1>Профиль</h1><div class="user-profile"><div class="row-fluid"><div class="span5 profile-sidebar"><div class="user-avatar"><img src="http://placehold.it/250x250"alt=""/></div><div class="menu"><ul class="nav nav-tabs nav-stacked"><li><a href="/user/profile/view"data-ng-class="{\'active\': $routeSegment.startsWith(\'main.profile.view\')}"class="list-group-item">Профиль;</a></li><li><a href="/user/profile/edit"data-ng-class="{\'active\': $routeSegment.startsWith(\'main.profile.edit\')}"class="list-group-item">Редактировать профиль;</a></li><li><a href="/user/profile/password"data-ng-class="{\'active\': $routeSegment.startsWith(\'main.profile.password\')}"class="list-group-item">Сменить пароль;</a></li><li><a href="/user/profile/avatar"data-ng-class="{\'active\': $routeSegment.startsWith(\'main.profile.avatar\')}"class="list-group-item">Сменить аватарку;</a></li><li><a href="/user/profile/public"data-ng-class="{\'active\': $routeSegment.startsWith(\'main.profile.public\')}"class="list-group-item">Мои публикации;</a></li></ul></div></div><div class="span7 info profile"><div ng-switch on="settings"><div app-view-segment="2"></div></div></div></div></div>{{user.login;}}');
	$templateCache.put('/views/user/profile/edit/avatar.html', '<h2>Сменить аватарку</h2>{{user;}}');
	$templateCache.put('/views/user/profile/edit/password.html', '<h2>Сменить пароль</h2> {{user}} <form name="register" ng-submit="saveUser(user)" class="registration form-horizontal"> <fieldset> <label>Текущий пароль:</label> <input type="password" placeholder="Текущий пароль…" ng-model="user.password"> </fieldset> <fieldset> <label>Новый пароль:</label> <input type="password" placeholder="Новый пароль…" ng-model="user.password"> </fieldset> <fieldset> <label>Повторите пароль: </label> <input type="password" placeholder="Повторите пароль…" ng-model="user.spassword"> </fieldset> <fieldset> <label></label> <button ng-disabled="register.$invalid || loading" ng-click="saveUser(user)" class="btn btn-primary"> <span ng-hide="loading">Сохранить</span> <span ng-show="loading">Сохраняется...</span> </button> </fieldset> </form>');
	$templateCache.put('/views/user/profile/edit/profile.html', '<h2>Редактировать профиль</h2> {{user}} <form name="register" ng-submit="saveUser(user)" class="registration form-horizontal"> <fieldset> <label>Имя:</label> <input type="text" placeholder="Введите имя…" ng-model="user.firstname"> </fieldset> <fieldset> <label>Фамилия:</label> <input type="text" placeholder="Введите фамилию…" ng-model="user.secondname"> </fieldset> <fieldset> <label>Дата рождения: </label> <input type="text" placeholder="Дата рождения…" ng-model="user.birth_date" data-type="12.12.1212"> </fieldset> <fieldset> <label>Город: </label> <input type="text" placeholder="Город…" ng-model="user.city"> </fieldset> <fieldset> <label>E-mail: </label> <input type="email" placeholder="e-mail…" ng-model="user.email"> </fieldset> <fieldset> <label></label> <button ng-disabled="register.$invalid || loading" ng-click="saveUser(user)" class="btn btn-primary"> <span ng-hide="loading">Сохранить</span> <span ng-show="loading">Сохраняется...</span> </button> </fieldset> </form>');
	$templateCache.put('/views/user/profile/public.html', '<h2>Мои публикации</h2> <ul class="unstyled"> <li><a href="#">Публикация под названием каким-то</a></li> <li><a href="#">Публикация под названием каким-то еще</a></li> <li><a href="#">Публикация под названием каким-то еще и еще</a></li> <li><a href="#">Публикация под названием каким-то и снова здрасте</a></li> </ul>');
	$templateCache.put('/views/user/profile/view.html', '<div class="main_info"> <h2>{{ user.fullname }}</h2> <ul class="unstyled"> <li class="row-fluid" ng-show="user.firstname"><span class="span3">Имя:</span> <span class="span7">{{ user.firstname }}</span></li> <li class="row-fluid" ng-show="user.secondname"><span class="span3">Фамилия:</span> <span class="span7">{{ user.secondname }}</span></li> <li class="row-fluid" ng-show="user.birth_date"><span class="span3">Дата рождения:</span> <span class="span7">{{ user.birth_date }}</span></li> <li class="row-fluid" ng-show="user.city"><span class="span3">Город:</span> <span class="span7">{{ user.city }}</span></li> <li class="row-fluid" ng-show="user.email"><span class="span3">E-mail:</span> <span class="span7">{{ user.email }}</span></li> </ul> </div>');
	$templateCache.put('/views/widgets/menu/footer-menu.html', '<script type="text/ng-template" id="menu/item"> <a smooth-scroll data-target="top" ng-href="{{ item.url }}"> {{ item.title|language }} </a> <span ng-if="!$last" class="divider-right"></span> </script> <div> <ul class="nav"> <li ng-repeat="item in menu.children" ng-controller="bcMenu.Controllers.MenuItem" ng-include="\'menu/item\'"></li> </ul> </div>');
	$templateCache.put('/views/widgets/menu/menu.html', '<script type="text/ng-template" id="menu/item"> <a smooth-scroll data-target="top" data-toggle="dropdown" ng-class="{\'dropdown-toggle\': item.children.length}" ng-href="{{ item.url }}"> {{ item.title|language }} <b ng-show="item.children.length" class="caret"></b> </a> <ul class="dropdown-menu" ng-if="item.children.length"> <li ng-repeat="item in item.children" ng-controller="bcMenu.Controllers.MenuItem" ng-include="\'menu/item\'"></li> </ul> </script> <div> <ul class="nav"> <li ng-class="{\'dropdown\': item.children.length}" ng-repeat="item in menu.children" ng-controller="bcMenu.Controllers.MenuItem" ng-include="\'menu/item\'"></li> </ul> </div>');
	$templateCache.put('/views/widgets/pages/category.html', '<div class="main-feed category widget" bz-loading-container="loading" ng-init="showMore=true" xmlns="http://www.w3.org/1999/html"> <div class="all-category"> <div class="one-category" data-ng-repeat="children in category.children"> <h3><a href="c-{{children.url}}">{{children.title|language}}</a></h3> <article> {{children.description|language}} </article> <hr/> </div> </div> <table ng-table="tableParams" class="no-thead table"> <tr ng-repeat="page in pagesList"> <td> <div class="feed-item"> <ul class="unstyled tags"> <li class="badge" ng-repeat="tag in page.tags"><a href="#" title="">{{ tag.title }}</a></li> </ul> <div ng-include="\'/views/widgets/pages/page/\' + page.template"></div> </div> </td> </tr> </table> </div>');
	$templateCache.put('/views/widgets/pages/category/footer.html', '<div> <div class="footer-page" ng-bind-html="page.body.en"></div> </div>');
	$templateCache.put('/views/widgets/pages/category/info.html', '<div> <div class="info-page" ng-bind-html="page.body.en"></div> <div class="plant"></div> <div class="delivery-conditions"></div> </div> <div class="clearfix"></div>');
	$templateCache.put('/views/widgets/pages/category/menu.html', '<div> <ul class="nav"> <li ng-repeat="page in pagesList"> <a href="{{ page.url }}">{{page.title.en}}</a> </li> </ul> </div>');
	$templateCache.put('/views/widgets/pages/category/tea.html', '<div> <h2 class="tea-category-title">Категории чая</h2> <div class="page-list"> <div class="page"> <a href="/c-organic-teas"> <img class="thumb" src="../../../../assets/img/cat1.jpg"/> <h3>Oрганические чаи</h3> </a> </div> <div class="page"> <a href="/c-matcha"> <img class="thumb" src="../../../../assets/img/cat2.jpg"/> <h3>Матча</h3> </a> </div> <div class="page"> <a href="/c-teas-for-health"> <img class="thumb" src="../../../../assets/img/cat3.jpg"/> <h3>Функциональные чаи для здоровья</h3> </a> </div> <div class="page"> <a href="/c-herbal-teas"> <img class="thumb" src="../../../../assets/img/cat4.jpg"/> <h3>Травяные чаи</h3> </a> </div> <div class="page"> <a href="/c-latte"> <img class="thumb" src="../../../../assets/img/cat5.jpg"/> <h3>Латте</h3> </a> </div> <div class="page"> <a href="/c-meal-replacement"> <img class="thumb" src="../../../../assets/img/cat6.jpg"/> <h3>Пищезаменители</h3> </a> </div> <div class="page"> <a href="/c-honey-and-fruit"> <img class="thumb" src="../../../../assets/img/cat7.jpg"/> <h3>Медово-фруктовые чаи</h3> </a> </div> <div class="page"> <a href="/c-bup-diet"> <img class="thumb" src="../../../../assets/img/cat8.jpg"/> <h3>Bup диета чай</h3> </a> </div> </div> </div>');
	$templateCache.put('/views/widgets/pages/page.html', '<div class="row default widget page_d"> <div ng-class="{ \'col-lg-8\': page.images.0, \'col-lg-12\': !page.images.0 }"> <h2><a smooth-scroll data-target="top" ng-href="{{ page.url }}" class="poster">{{page.title|language}}</a></h2> <div ng-class="{ \'col-lg-4\': page.images.0}"> <a smooth-scroll data-target="top" ng-href="{{ page.url }}" class="poster"> <img ng-src="{{ page.images.0.thumbnails.preview }}"/> </a> </div> <article> <div class="body"> <div ng-bind-html="page.body.en"></div> </div> </article> </div> </div>');
	$templateCache.put('/views/widgets/pages/page/default.html', '<div class="row default widget"> <div ng-class="{ \'col-lg-8\': page.images.0, \'col-lg-12\': !page.images.0 }"> <h2><a smooth-scroll data-target="top" ng-href="{{ page.url }}" class="poster">{{page.title|language}}</a></h2> <article> <div class="body"> <div ng-bind-html="page.body.en"></div> </div> </article> </div> <div ng-class="{ \'col-lg-4\': page.images.0}"> <a smooth-scroll data-target="top" ng-href="{{ page.url }}" class="poster"> <img ng-src="{{ page.images.0.thumbnails.preview }}"/> </a> </div> </div> <hr/>');
	$templateCache.put('/views/widgets/pages/page/gallery.html', '<div class="gallery widget"> <h2><a smooth-scroll data-target="top" ng-href="{{ page.url }}" class="poster">{{page.title|language}}</a></h2> <div class="body description description-gallery"> <div ng-bind-html="page.body.en"></div> </div> <ul class="page-images list-unstyled nav-pills nav"> <li ng-repeat="image in page.images|limitTo:8"> <a class="thumbnail" ng-href="{{ page.url }}" rel="gallery"><img ng-src="{{ image.thumbnails.preview }}"/></a> </li> </ul> </div> <hr/>');
	$templateCache.put('/views/widgets/pages/page/photo.html', '<div class="photo widget"> <h2><a smooth-scroll data-target="top" ng-href="{{ page.url }}" class="poster">{{page.title|language}}</a></h2> <a smooth-scroll data-target="top" class="feed-title" ng-href="{{ page.url }}"> <img ng-src="{{ page.images.0.url }}"/> </a> <div class="body description description-photo"> <div ng-bind-html="page.body.en"></div> </div> </div> <hr/>');
	$templateCache.put('/views/widgets/pages/slider.html', '{{page.images;}}<div bz-slider total="page.images.length + n"class="slider widget"><div class="slider expand page"ng-show="index == n"ng-repeat="(n, image) in page.images">{{n;}}<img class="thumb"src="{{ image.url }}"alt="{{ page.images[0].name }}"/></div><div class="slider-nav"><div class="b-add"><a ng-repeat="(n, page) in page.images"data-ng-click="setIndex(n)">{{n+1;}}</a></div></div></div>;');
}]);