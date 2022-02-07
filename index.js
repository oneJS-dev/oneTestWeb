// import {Input, Button, P} from './miniHtml.js'
// import { html, unsafeStatic, withStatic } from './node_modules/lit/static-html.js';
// import {app, read, write, add, update,language, readText} from './oneCore.js'
// import {component, View, Icon, Modal, Input as Input2, Slider, Calendar, testComponent, jsToHtml} from './oneComponent.js'
// import {iosAlarmIcon} from './inlineIcons.js'
// import {text} from './text.js'

export const name = "myApp";
import {app, read, add, update, remove, readText, setLanguage, Component, themeVariable, goToState, readStateHistory} from './oneCore.js';
import {View, Icon, Modal, Button, Input, Slider, Div, Text, Strong, Pre, H1, H2, A} from './oneComponent.js';
import {oneIcons} from './oneIcons.js';
import {initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
// 
// import {firebase} from './node_modules/firebase/app/dist/index.esm.js'; //We can see in the Chrome source code what this compiles to.
// import {firebase} from 'firebase'; //We can see in the Chrome source code what this compiles to.

// import './node_modules/firebase/firestore/dist/index.esm.js';
// import './node_modules/firebase/auth/dist/index.esm.js';


//Initialize Firebase

let config = {
	apiKey: "AIzaSyAXxEyIhqPhdDO50-qy3q6YMuB4azrYHLw",
	authDomain: "one-login-24376.firebaseapp.com",
	databaseURL: "https://one-login-24376.firebaseio.com",
	projectId: "one-login-24376",
	storageBucket: "one-login-24376.appspot.com",
	messagingSenderId: "1092455581800",
	timestampsInSnapshots: true,
};
const firebaseApp = initializeApp(config);//Initialize firebase      
const firestoreDB = getFirestore();// Initialize Cloud Firestore after Firebase 

const myIcons = {apple: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.721 45.721">	<g>		<path d="M31.686,11.161c-2.615-0.057-5.047,1.063-7.073,2.882c-0.344-2.371-1.271-4.273-1.271-4.273			c10.967-1.485,7.901-9.753,7.901-9.753c-7.738-0.328-9.239,4.304-9.399,7.344c-2.385-2.55-5.077-4.009-6.202-4.518			c-1.071-0.484-2.329,0.074-2.775,1.159c-0.446,1.088,0.094,2.284,1.161,2.774c1.411,0.649,5.841,2.251,7.181,7.409			c-2.058-1.907-4.548-3.024-7.231-3.024c-7.066,0-13.598,5.845-11.318,17.281c1.866,9.357,8.678,17.279,15.744,17.279			c1.842,0,3.291-0.527,4.427-1.475c1.138,0.946,2.586,1.484,4.428,1.475c7.307-0.045,13.542-7.505,15.744-17.279			C45.232,18.552,40.071,11.343,31.686,11.161z"/>	</g></svg>', 
	cherry: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">	<g>		<path d="M481.642,304.43c-15.464-14.759-34.645-21.5-52.625-18.506c-18.899,3.151-33.064,11.954-42.103,26.163			c-0.477,0.75-0.913,1.518-1.351,2.283L280.984,84.295V13.803H243.72v40.804c-50.937-43.484-127.836-40.906-175.156,7.247			L0,131.623l13.288,13.06c24.188,23.771,56.099,36.809,90.006,36.809c0.461,0,0.929-0.003,1.391-0.007			c34.233-0.359,66.202-13.995,90.027-38.398l41.463-42.193L139.147,314.36c-0.441-0.766-0.884-1.53-1.356-2.273			c-9.038-14.209-23.204-23.012-42.103-26.163c-17.975-2.992-37.161,3.749-52.625,18.506			c-22.178,21.165-33.518,54.808-29.591,87.801c5.391,45.303,35.665,83.123,79.008,98.703c13.58,4.882,27.557,7.261,41.368,7.261			c30.273,0,59.74-11.444,82.4-33.077c24.033-22.945,36.707-56.107,33.078-86.548c-2.53-21.228-13.027-38.641-28.801-47.776			c-14.927-8.643-29.802-11.293-44.305-7.945l86.134-189.493l86.134,189.494c-14.503-3.346-29.381-0.699-44.305,7.945			c-15.773,9.135-26.27,26.548-28.801,47.776c-3.63,30.441,9.045,63.603,33.078,86.548c22.661,21.635,52.125,33.077,82.4,33.077			c13.809,0,27.79-2.381,41.368-7.261c43.344-15.58,73.618-53.4,79.008-98.703C515.16,359.238,503.821,325.595,481.642,304.43z"/>	</g>',
	grape: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">	<g>		<path d="M453.486,226.743c0-36.298-29.531-65.829-65.829-65.829c-16.848,0-32.23,6.369-43.886,16.816			c-11.656-10.446-27.038-16.816-43.886-16.816c-7.692,0-15.075,1.339-21.943,3.774V95.086c0-28.232,22.968-51.2,51.2-51.2V0			c-37.255,0-69.556,21.546-85.144,52.824c-32.372-30.555-71.55-35.214-92.357-35.214c-6.495,0-10.655,0.474-11.423,0.569			l-16.347,2.02l-2.623,16.261c-0.424,2.627-9.868,64.862,34.784,109.512c9.323,9.323,19.637,15.828,30.05,20.318			c-6.573,2.842-12.592,6.723-17.854,11.438c-11.655-10.445-27.037-16.814-43.884-16.814c-36.298,0-65.829,29.531-65.829,65.829			c0,28.94,18.779,53.558,44.784,62.359c-0.581,3.511-0.898,7.111-0.898,10.784c0,28.94,18.779,53.558,44.784,62.359			c-0.581,3.511-0.898,7.111-0.898,10.784c0,28.94,18.779,53.558,44.784,62.359c-0.581,3.511-0.898,7.111-0.898,10.784			C190.171,482.471,219.702,512,256,512s65.829-29.529,65.829-65.829c0-3.673-0.317-7.273-0.898-10.784			c26.005-8.801,44.784-33.419,44.784-62.359c0-3.673-0.317-7.273-0.898-10.784c26.005-8.801,44.784-33.419,44.784-62.359			c0-3.673-0.317-7.273-0.898-10.784C434.707,280.301,453.486,255.683,453.486,226.743z"/>	</g>'
}


// let language = 'a';

//alert(language); //works IE/SAFARI/CHROME/FF
// let test = {path: {to: {test: 'Alex'}}};
// let inputTypes = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
// console.log('test: ' + test['path'])
// firebase.initializeApp(config);//Initialize firebase	  
// window.firestore = firebase.firestore();// Initialize Cloud Firestore through Firebase 

	   // FirebaseUI config.
      // var uiConfig = {
      //   signInSuccessUrl: '<url-to-redirect-to-on-success>',
      //   signInOptions: [
      //     // Leave the lines as is for the providers you want to offer your users.
      //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //     firebase.auth.GithubAuthProvider.PROVIDER_ID,
      //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //     firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      //     firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      //   ],
      //   // tosUrl and privacyPolicyUrl accept either url string or a callback
      //   // function.
      //   // Terms of service url/callback.
      //   tosUrl: '<your-tos-url>',
      //   // Privacy policy url/callback.
      //   privacyPolicyUrl: function() {
      //     window.location.assign('<your-privacy-policy-url>');
      //   }
      // };

const state = {
	// modalVisible: {default: false},
	// events: {default: [], source: {firestore: 'eventz'}, storage: {firestore: 'eventz'}},
	// offlineEvents: {default: [], source: {local: 'event'}, storage: {local: 'event'}},

	name: '',
	userInput: '',
	color: '#0077ff',
	fontSize: 100,


	statePosition: {default: 0, storage: goToState},
	// date: {},
	// time: {},
	// eventId: {default:'', source: {url: '/events/:'}},
	// selectedEvent: {default: {}, source: {firestore: 'eventz/#/events/:'}},
	// user: {},
	// openModal: {default: false},
	// view1: {default: false},
	//Unit
	language: 'en',
	languageInput: 'en',
	// language: {default: language, source: {firestore: 'settings/language'}},
	// range: {default: 2},
	// slide: {default: 1},
	// slide2: {default: 1},
	// calendarDate: {default: new Date()},
	//Unit
	visible: true,
	inAnimation: 'fade-in',
	outAnimation: 'fade-out',
	
	//Unit
	page1Active: false, page2Active: false, page3Active: false,
	page1Visible: false, page2Visible: false, page3Visible: false,

	//Unit
	selectedFlavor: 'default',

	//Unit
	contentVertical: 'top',
	contentHorizontal: 'left',
	contentDirection: 'row',
	selfExpand: false,

	//Unit
	password: '',

	//Unit
	appName: {default: 'oneJS', storage: {local: 'appName'}, source: {local: 'appName'}},
	appFlavor: {default: 'default', storage: {local: 'appFlavor'}, source: {local: 'appFlavor'}},

	//Unit
	listType: 'Test',
	listItemInput: '',
	listItems: {default: [], source: {indexedDB: '@listType', collections: ['Test', 'Groceries', 'Movies', 'TODOs', 'Destinations']}, 
				storage: {indexedDB: '@listType', collections: ['Test', 'Groceries', 'Movies', 'TODOs', 'Destinations']}},
	selectedListItemId: '',

	//Unit
	listType2: 'Test',
	listItemInput2: '',
	listItems2: {default: [], source: {firestore: '@listType2'}, storage: {firestore: '@listType2'}},
	selectedListItemId2: '',

	//Custom components:
	slide: 0,
}
/*
How to manage a language:
state: {
	text: source: {text: path}, language: {firestore:'settings/language'} //This reads from text.js and an language change updates the strings.
}
Text()(read('text').settings)
*/
const theme = {
	default: {
		// primaryColor: 'linear-gradient(45deg, #0077ff, #8800ff)',
		primaryColor: '#0077ff', //primary
        backgroundColor: '#ffffff',//contrast
        neutralColor: '#D9DADC',//#D9DADC #9ba8a7 V

        textFont: 'Arial, sans-serif', //"Montserrat", "Trebuchet MS", Helvetica, sans-serif;
        textColor: '#666',
        textsSize: '100%',

        titleFont: 'Arial, sans-serif',
        titleColor: '#333',
        titleSize: '140%',

        sectionFont: 'Arial, sans-serif',
        sectionColor: '#333',
        sectionSize: '120%',

        radius: '3px',
        border: 'none', //use the primary color for the border
        inputBorder: '1px solid #D9DADC',
        shadow: 'none', //0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
	},
	grape: {
		primaryColor: '#bb00ff',
		backgroundColor: '#ffffff',
		textFont: 'serif',
        textColor: '#bb00ff',
        textSize: '120%',
        shadow: 'none',
        border: '2px solid #bb00ff',
        radius: '3px',
	},
	cherry: {
		primaryColor: '#ffffff',
		backgroundColor: '#ff0011',
		textFont: 'Brush Script MT',
        textColor: '#ffffff',
        textSize: '120%',
        shadow: 'none',
        border: 'none',
        radius: '25px',
	},
	apple: {
		primaryColor: '#00ff55',
		textFont: 'monospace',
        textColor: '#00ff55',
        textSize: '120%',
        shadow: '0 4px 8px 0px rgba(0,0,0,0.2)',
        border: 'none',
        radius: '0px',
	},
	inverted: {
		primaryColor: '#ffffff', //primary
        backgroundColor: '#0077ff',//contrast
	},
	icon: {
		shadow: 'none',
		border: 'none'
	},
	dark: {
		primaryColor: '#ffffff',
		backgroundColor: '#333333',
        textColor: '#ffffff',
	},
	danger: {
		primaryColor: '#ff0011',
	},
	disabled: {
		primaryColor: '#aaa',
	},
}

/*
Unit test 1: Different Inputs and how they update the state
Unit test 2: Icons and theme
Unit test 3: Routing and urls
Unit test 4: Custom components
Unit test 5: View
	-Content
	-Visibility
	-Animations
	-Routing
Unit test 6: Persistence - Firestore, IndexedDB and LocalStorage
	-Use write, update and add functions
	-Url paths, state paths and static paths
	-Retrieve collections and documents
Unit test 7: Languages and translation

*/
const titleStyle = {
	id: 'title',
	h1: {fontWeight: 100, color: '#aaa', marginLeft: '10px'},
	fill: themeVariable('primaryColor')
}
const subtitleStyle = {
	id: 'subtitle',
	padding: '20px 5vw 20px 5vw',
	fontSize: '120%',
	fontWeight: 100
}
const unitStyle = {
	id: 'card',
	// width: '100%',
	margin: '20px 5vw 20px 5vw',
	// maxWidth: '90vw',
  	boxShadow: '0 4px 8px 0px rgba(0,0,0,0.2)',
  	transition: '0.3s',
  	padding: '20px',
  	borderRadius: themeVariable('radius'),
	':hover': {
	  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
	}
}
const demoStyle = {
	id: 'demo',
	// width: '100%',
  	border: '1px solid ' + themeVariable('primaryColor'),
  	borderRadius: themeVariable('radius'),
  	// padding: '10px',
}
const sourceCodeStyle = {
	id: 'sourceCode',
    backgroundColor: themeVariable('primaryColor') ,
    border: '1px solid ' + themeVariable('primaryColor'),
    borderRadius: themeVariable('radius'),
    color: '#fff',
    pageBreakInside: 'avoid',
    fontFamily: 'monospace',
    fontSize: '110%',
    lineHeight: 1.6,
    // marginBottom: '1.6em',
    // maxWidth: '100%',
    overflow: 'auto',
    padding: '10px',
    // display: 'block',
    wordWrap: 'break-word'
}
const inputStyle = {
	id: 'input',
    // backgroundColor: themeVariable('neutralColor'),
    padding: '10px'
}
const resultStyle = {
	id: 'result',
    backgroundColor: '#f1f1f1',
    padding: '10px',
    maxWidth: '100%'
}
const historyStyle = {
	id: 'history',
	background: 'white',
	width: 'min(300px, 80%)',
	minHeight: '200px',
	border: '2px solid ' + themeVariable('primaryColor'),  
	borderRadius: themeVariable('radius'), 
}
const historyBlocksStyle = {
	id: 'historyBlock',
	background: themeVariable('neutralColor'),
	width: '80px',
	height: '85px',
	cursor: 'pointer',
	border: '1px solid #666',
	borderRadius: themeVariable('radius'), 
	textOverflow: 'ellipsis',
  	overflow: 'hidden',
  	padding: '0px',
  	fontSize: '80%',
  	whiteSpace: 'nowrap'
}
const buttonStyle = {
	id: 'button',
	cursor: 'pointer',
	backgroundColor: themeVariable('primaryColor'),
	padding: '10px',
	color: 'white',
	borderRadius: themeVariable('radius'),
}
const pageLabelStyle = {
	id: 'pageLabel',
	margin: '0 5px 0 5px',
	backgroundColor: themeVariable('neutralColor'),
	padding: '10px',
	color: 'white',
	borderRadius: themeVariable('radius'),
	'&[active]' : {
		backgroundColor: themeVariable('primaryColor')
	}
}
const pageStyle = {
	id: 'page',
	backgroundColor: 'white',
	width: 'min(30vw, 300px)',
	borderRadius: themeVariable('radius'),
	marginTop: '10px'
}
const flavorSelectorStyle = {
	id: 'flavorSelector',
	cursor: 'pointer',
	width: '90%',
	background: themeVariable('backgroundColor'),
	color: themeVariable('primaryColor'),
	border: themeVariable('border'),  
	borderRadius: themeVariable('radius'), 
	boxShadow: themeVariable('shadow'),
	padding: '10px',
	marginBottom: '5px',
}
const samplePageStyle = {
	id: 'samplePage',
	background: 'white',
	padding: '10px', 
	width: 'min(90%, 300px)',
	background: themeVariable('backgroundColor'),
	color: themeVariable('primaryColor'),
	border: themeVariable('border'),  
	borderRadius: themeVariable('radius'), 
	boxShadow: themeVariable('shadow'),
}
const containerStyle = {
	id: 'container',
	background: 'white',
	// padding: '10px',
	width: 'min(300px, 90%)',
	height: '150px',
	// width: 'max(70px, 90%)',
	border: '2px solid ' + themeVariable('primaryColor'),  
	borderRadius: themeVariable('radius'), 
}
const contentBlocksStyle = {
	id: 'contentBloc',
	background: themeVariable('neutralColor'),
	minWidth: '60px',
	minHeight: '60px',
	// padding: '20px',
	border: '1px solid #666',
	borderRadius: themeVariable('radius'), 
	// transitionDuration: '0.4s',
}
const selfBlocksStyle = {
	id: 'selfBlock',
	background: themeVariable('primaryColor'),
	minWidth: '60px',
	minHeight: '60px',
	// padding: '20px',
	border: '1px solid #666',
	borderRadius: themeVariable('radius'), 
	// transitionDuration: '0.4s',
}
const listStyle = {
	id: 'list',
	background: 'white',
	padding: '10px', 
	width: 'min(90%, 300px)',
	borderRadius: themeVariable('radius'), 
	// overflowY: 'scroll',
	height: '250px'
}
const listItemContainer = {
	id: 'listItemContainer',
	// background: 'pink',
	height: '150px',
	width: '85%',
	maxWidth: '300px',
	// cursor: 'pointer',
	// padding: '0 15px 0 15px',
	// padding: '10px', 
	// width: 'min(90%, 300px)',
	borderRadius: themeVariable('radius'),
	border: '1px solid #f1f1f1',
	// textOverflow: 'ellipsis',
  	overflowY: 'scroll' 
  	// transition: '0.4s',
  	// '&:hover': {
  	// 	background: '#f1f1f1'
  	// }
	// overflowY: 'scroll',
	// maxHeight: '300px'
}
const listItemStyle = {
	id: 'listItem',
	// background: 's',
	maxHeight: '40px',
	// width: '100%',
	// maxWidth: '300px',
	cursor: 'pointer',
	padding: '0 15px 0 15px',
	// padding: '10px', 
	// width: 'min(90%, 300px)',
	borderBottom: '1px solid #f1f1f1',
	textOverflow: 'ellipsis',
  	overflow: 'hidden', 
  	transition: '0.8s',
  	'&:hover': {
  		background: '#f1f1f1'
  	}
	// overflowY: 'scroll',
	// maxHeight: '300px'
}


//TODO: Input array for style propery, let oneCore compose it
//TODO: array for content
//Array for update?

const text = {	input: {en: 'Choose your language', es: 'Escoja su idioma', fr: 'Choisissez votre langue', de: 'Wähle deine Sprache'},
				button: {en: 'Click to confirm', es: 'Clique para confirmar', fr: 'Cliquez pour confirmer', de: 'Klicken zum Bestätigen'}, 
				result: {en: 'Your language is English', es: 'Su idioma es Español', fr: 'Votre langue est le français', de: 'Ihre Sprache ist Deutsch'}};
const Password = Component('Password', ({password, ...attributes}={}) => {
	let has8Characters = password && password.length >= 8 ? true : false;	
	let hasNumber = password && password.match(/\d+/) ? true : false;
	let hasLetter = password && password.match(/[a-z]/) ? true : false;
	let hasCapitalLetter = password && password.match(/[A-Z]/) ? true : false;
	let hasSymbol = password && password.match(/[!-\/:-@[-`{-~]/) ? true : false;

	let check = '✓';
	let cross = '✗';

	let green = '#00ffac';
	let red = '#ff0050';
	
	return View({content: 'column top-left', style: {background: 'white',
	 borderRadius: themeVariable('radius'), padding: '15px'}})([
		View({style: {marginBottom: '5px'}})('Password must meet the following requirements:'),
		View({style: {color: has8Characters ? green : red}})((has8Characters ? check : cross) + ' Be at least 8 characters'),
		View({style: {color: hasNumber ? green : red}})((hasNumber ? check : cross) + ' At least one number'),
		View({style: {color: hasLetter ? green : red}})((hasLetter ? check : cross) + ' At least one letter'),
		View({style: {color: hasCapitalLetter ? green : red}})((hasCapitalLetter ? check : cross) + ' At least one capital letter'),
		View({style: {color: hasSymbol ? green : red}})((hasSymbol ? check : cross) + ' At least one special character'),
	]);
});

const template = () => {//Sin}ce this is a list, react forces us to maintain "key" for all of the properties
	let myTemplate = [
	// Icon2({icon: 'iosGlobe', theme: ['outline', 'shadow'], circled: true, style: {id: 'myStyle', fill: 'pink'}, url: {active: '/public'}, size: 32}),
		View({style: titleStyle, content: 'center-center', key: 'title1'})([
		Icon({icon: 'oneJS', size: 48}), H1()('OneJS')]),		
		H2({style: subtitleStyle, key: 'title2'})('Our aim is very simple, write a fully functional app using only JS following a functional programming pattern. HTML, JSX and CSS are things of the past.'),
		Slider({key: 'slide', memoized: true, id: 'slide', value: read('slide'), onChange: update('slide'), direction: 'column', scroll: true, bullets: true, style: {backgroundColor: 'pink', height: '300px'}})([View()('name Alex'), Button()('my button'), Button()('my button'), Button()('my button')]),
		Modal({visible: read('visible'), size: 'small', backdrop: false, onClose: update('visible'), header: 'This is my title', footer: [Button()('accept'), Button()('reject')]})('modal' + read('visible')),
		View({style: unitStyle, content: 'column center-stretch', expand: 1, key: 'unit1'})([
			Text()([Strong()('Unit Test 1: '), 'Test Inputs and how they update the state.']),
			// Text()('Test Inputs and how they update the state'),
			View({style: demoStyle, content: 'stretch-space', expand: 1})([
				
				View({style: inputStyle, content: 'column space-center'})([
					Text()('Type your value'),
					// Input({type: 'select',  style: {width: '180px'}, onInput: update('userInput'), options: {cars: {volvo: 'Volvo', mercedes: 'Mercedes'}, watches: {rolex: 'Rolex', cartier: 'Cartier'}}}),
					Input({type: 'text',  inlineStyle: {width: '180px'}, onInput: update('userInput'), placeholder: 'Test your input here...'}),
					// Input({type: 'textarea',  style: {width: '180px'}, onInput: update('userInput')}),
					Text()('Choose your color'),
					Input({type: 'color',  value: read('color'), onInput: update('color')}),
					// Input({type: 'number',  value: read('statePosition'), onInput: update('statePosition')}),
					// Input({type: 'number', onInput: (event) => {goToState(event.target.value)}}),
					Text()('Choose your font size'),
					Input({type: 'range',  value: read('fontSize'), onInput: update('fontSize'), min: 50, max: 150}), //Requires value attribute
				]),
				View({style: resultStyle, content: 'column space-center', expand: 1})([
					Text()('Result: '),
					View({expand: 1})(Text({inlineStyle: {color: read('color'), fontSize: read('fontSize') + '%'}})('Your input: ' + read('userInput'))),
					// View()('state Id: ' + (readStateHistory().length > 0 ? readStateHistory()[0].stateId : '0')  +  ', value: ' + (readStateHistory().length > 0 ? readStateHistory()[0].stateValue : '0')),
					// View({style: {background: 'white', maxWidth: '90%'}})(View()((readStateHistory()).map((value, index) => Text({style: {width: '40px', height: '40px', background: 'blue'}})(value.toString())))),
					View({content: 'distribute-distribute', expand: 1, style: historyStyle})([
						readStateHistory().map((value, index) => View({key: index, onClick: (e) => goToState(index), style: historyBlocksStyle, content: 'column center-center'})([
						// 	View({content: 'column center-center', style: {fontSize: '80%'}})([
							View({inlineStyle: {fontWeight: 'bold', width: '60px', height: '20px', textOverflow: 'ellipsis', overflow: 'hidden'}})('Back to ' + index), 
							View({inlineStyle: {width: '55px', height: '20px', textOverflow: 'ellipsis', overflow: 'hidden'}})('Id: ' + value.stateId),
							View({inlineStyle: {width: '55px', height: '20px', textOverflow: 'ellipsis', overflow: 'hidden'}})('Old: ' + value.oldValue), 
							View({inlineStyle: {width: '55px', height: '20px', textOverflow: 'ellipsis', overflow: 'hidden'}})('New: ' + value.newValue)
							// index, value.stateId, value.oldValue, value.newValue
						// ])
							])), 
					]),
				]),
				
				
				// Input({type: 'date',  value: read('name'), onInput: update('name')}), //Requires value attribute
				// Text({style: {backgroundColor: read('name')}})('Your input: ' + read('name')),
				// Icon({icon: 'iosGlobe', theme: ['outline', 'shadow'], circled: true, style: {id: 'myStyle', fill: 'var(--one-backgroundColor) !important'}, url: {active: '/public'}, size: 32}),
				// // Icon2({icon: 'iosGlobe', theme: ['outline', 'shadow'], circled: true, style: {id: 'myStyle', fill: 'pink'}, url: {active: '/public'}, size: 32}),
				// Icon({icon: 'iosAdd', circled: false, style: {id: 'myStyle', fill: 'pink'}, url: {active: '/public'},  size: 32}),
			]),//TODO add time travel in state history
			View({content: 'stretch-stretch', style: sourceCodeStyle, expand: 1})([
				Pre()("Input({type: 'color',  onInput: update('color')})"),
				// Pre({style: sourceCodeStyle})(readStateHistory()[0].toString()),
			]),
		]),
		
		
		View({style: unitStyle, content: 'column center-stretch', expand: 1, key: 'unit2'})([
			Text()([Strong()('Unit Test 2: '), 'Language']),
			// Text()('Test Inputs and how they update the state'),
			View({style: demoStyle, content: 'stretch-stretch', expand: 1})([
				View({style: inputStyle, content: 'column space-center'})([
					Text()(readText('input')),
					Input({type: 'select',  inlineStyle: {width: '180px'}, onInput: update('languageInput'), options: ['en', 'es', 'fr', 'de']}),
					Button({inlineStyle: {width: '180px'}, onClick: () => {setLanguage(read('languageInput'));update('language')(read('languageInput'))}})(readText('button')),
				]),
				View({style: resultStyle, content: 'column space-center', expand: 1})([
					Text()('Result: '),
					View({expand: 1})(Text()(readText('result'))),
				]),
			]),
			View({content: 'stretch-stretch', style: sourceCodeStyle, expand: 1})([
				Pre()("Input({type: 'color',  onInput: update('color')})"),
			]),
		]),

		
		View({style: unitStyle, content: 'column center-stretch', expand: 1, key: 'unit3'})([
			Text()([Strong()('Unit Test 3: '), 'Animations']),
			// Text()('Test Inputs and how they update the state'),
			View({style: demoStyle, content: 'stretch-space', expand: 1})([
				View({style: inputStyle, content: 'column space-center'})([
					Text()('Intro Animation'),
					Input({type: 'select',  inlineStyle: {width: '180px'}, value: read('inAnimation'), onInput: update('inAnimation'), options: ['appear', 'fade-in', 'fade-in-left', 'fade-in-right', 
					'slide-in-left', 'slide-in-right', 'slide-in-up', 'slide-in-down', 'expand', 'vertical-expand', 'horizontal-expand']}),
					Text()('Outro Animation'),
					Input({type: 'select',  inlineStyle: {width: '180px'}, value: read('outAnimation'), onInput: update('outAnimation'), options: ['disappear', 'fade-out', 'fade-out-left','fade-out-right', 
					'slide-out-left', 'slide-out-right', 'slide-out-up', 'slide-out-down', 'shrink', 'vertical-shrink', 'horizontal-shrink']}),
					Text()('Toggle visibility'),
					Input({type: 'checkbox', checked: read('visible'), onChange: update('visible')}),
				]),
				View({style: resultStyle, content: 'column space-center', expand: 1})([
					Text()('Result: '),
					View({content: 'center-center', expand: 1, visible: read('visible'), animation: {visible: [read('inAnimation'), read('outAnimation')]},
					style: {background: themeVariable('primaryColor'), borderRadius: themeVariable('radius'), margin: '5vw', padding: '10px', color: 'white'}})('Animated Component'),
				]),
			]),
			View({content: 'stretch-stretch', style: sourceCodeStyle, expand: 1})([
				Pre()("Input({type: 'color',  onInput: update('color')})"),
			]),
		]),
		View({style: unitStyle, content: 'column center-stretch', expand: 1, key: 'unit4'})([
			Text()([Strong()('Unit Test 4: '), 'Routing']),
			// Text()('Test Inputs and how they update the state'),
			View({style: demoStyle, content: 'stretch-space', expand: 1})([
				View({style: inputStyle, content: 'column space-center'})([
					View({style: buttonStyle, url: {link: '/link1'}})('Link to Page 1'),
					View({style: buttonStyle, url: {link: '/link2'}})('Link to Page 2'),
					View({style: buttonStyle, url: {link: '/link3'}})('Link to Page 3'),
				]),
				View({style: resultStyle, content: 'column space-center', expand: 1})([
					Text()('Result: '),
					View({content: 'center-center'})([View({style: pageLabelStyle, active: read('page1Active'), onActiveChange: update('page1Active'), url: {active: '/link1'}})('Page 1'),
						View({style: pageLabelStyle, active: read('page2Active'), onActiveChange: update('page2Active'), url: {active: '/link2'}})('Page 2'),
						View({style: pageLabelStyle, active: read('page3Active'), onActiveChange: update('page3Active'), url: {active: '/link3'}})('Page 3')]),
					View({content: 'stretch-stretch', expand: 1, inlineStyle: {height: '100px'}})([View({style: pageStyle, content: 'center-center', visible: read('page1Visible'), onVisibleChange: update('page1Visible'), url: {visible: '/link1'}})('Page 1 Content'),
						View({style: pageStyle, content: 'center-center', visible: read('page2Visible'), onVisibleChange: update('page2Visible'), url: {visible: '/link2'}})('Page 2 Content'),
						View({style: pageStyle, content: 'center-center', visible: read('page3Visible'), onVisibleChange: update('page3Visible'), url: {visible: '/link3'}})('Page 3 Content')]),
				]),
			]),
			View({content: 'stretch-stretch', style: sourceCodeStyle, expand: 1})([
				Pre()("Input({type: 'color',  onInput: update('color')})"),
			]),
		]),
		View({style: unitStyle, content: 'column center-stretch', expand: 1, key: 'unit5'})([
			Text()([Strong()('Unit Test 5: '), 'Style Priority and Themes']),
			View({style: demoStyle, content: 'stretch-space', expand: 1})([
				View({style: inputStyle, content: 'column space-center'})([
					Text()('Pick a Flavor'),
					View({flavor: 'grape', content: 'center-space', onClick: (e) => update('selectedFlavor')('grape'), 
						style: flavorSelectorStyle})([Text()('Grape'), Icon({icon: 'grape', iconFont: myIcons, flavor: 'icon'})]),
					View({flavor: 'cherry', content: 'center-space', onClick: (e) => update('selectedFlavor')('cherry'), 
						style: flavorSelectorStyle})([Text()('Cherry'), Icon({icon: 'cherry', iconFont: myIcons, flavor: 'icon'})]),
					View({flavor: 'apple', content: 'center-space', onClick: (e) => update('selectedFlavor')('apple'), 
						style: flavorSelectorStyle})([Text()('Apple'), Icon({icon: 'apple', iconFont: myIcons, flavor: 'icon'})]),
					
				]),
				View({style: resultStyle, content: 'column space-center', expand: 1})([
					Text()('Result:'),
					// Object.keys(oneIcons).map((iconName) => Icon({icon: iconName})),
					View({content: 'column center-center', expand: 1, flavor: read('selectedFlavor'), style: samplePageStyle})([
						Text()('My Sample Page'), 						
						Icon({icon: 'oneJS', size: 48, flavor: 'icon'}), 
						Button({inlineStyle: {marginTop: '20px'}})('My button')
					]),
				]),
			]),
			View({content: 'stretch-stretch', style: sourceCodeStyle, expand: 1})([
				Pre()("Input({type: 'color',  onInput: update('color')})"),
			]),
		]),
		View({style: unitStyle, content: 'column center-stretch', expand: 1, key: 'unit6'})([
			Text()([Strong()('Unit Test 6: '), 'Content Positioning']),
			// Text()('Test Inputs and how they update the state'),
			View({style: demoStyle, content: 'stretch-space', expand: 1})([
				View({style: inputStyle, content: 'column space-center'})([
					Text()('Content Vertical Positioning'),
					Input({type: 'select',  inlineStyle: {width: '180px'}, value: read('contentVertical'), onInput: update('contentVertical'), options: ['top', 'center', 'bottom', 'stretch', 'space', 'distribute']}),
					Text()('Content Horizontal Positioning'),
					Input({type: 'select',  inlineStyle: {width: '180px'}, value: read('contentHorizontal'), onInput: update('contentHorizontal'), options: ['left', 'center', 'right', 'stretch', 'space', 'distribute']}),
					Text()('Content Direction'),
					Input({type: 'select',  inlineStyle: {width: '180px'}, value: read('contentDirection'), onInput: update('contentDirection'), options: ['row', 'column']}),
					Text()('Expand Logo Block'),
					Input({type: 'checkbox', checked: read('selfExpand'), onChange: update('selfExpand')}),
				]),
				View({style: resultStyle, content: 'column space-center', expand: 1})([
					Text()('Result: '),
					View({content: read('contentDirection')+' '+read('contentVertical')+'-'+read('contentHorizontal'), expand: 1, style: containerStyle})([
						View({style: contentBlocksStyle, content: 'center-center'})('O'), View({style: contentBlocksStyle, content: 'center-center'})('N'), View({style: contentBlocksStyle, content: 'center-center'})('E'), 
						View({style: selfBlocksStyle, content: 'center-center', expand: read('selfExpand') ? 1 : 0})(Icon({icon:'oneJS', flavor: 'inverted'})),
						View({style: contentBlocksStyle, content: 'center-center'})('J'), View({style: contentBlocksStyle, content: 'center-center'})('S'), 
						// View({style: contentBlocksStyle})('A'), View({style: contentBlocksStyle})('A')
					]),
				]),
			]),
			View({content: 'stretch-stretch', style: sourceCodeStyle, expand: 1})([
				Pre()("Input({type: 'color',  onInput: update('color')})"),
			]),
		]),
		View({style: unitStyle, content: 'column center-stretch', expand: 1, key: 'unit7'})([
			Text()([Strong()('Unit Test 7: '), 'Custom Components']),
			// Text()('Test Inputs and how they update the state'),
			View({style: demoStyle, content: 'center-center', expand: 1})([
				View({style: inputStyle, content: 'column space-center'})([
					Text()('Type your password'),
					Input({type: 'password',  value: read('password'), onInput: update('password')}),
				]),
				View({style: resultStyle, content: 'column space-center', expand: 1})([
					Text()('Result: '),
					Password({password: read('password'), memoized: true})
					// View({content: 'center-center', expand: 1, visible: read('visible'), animation: {visible: [read('inAnimation'), read('outAnimation')]},
					// style: {background: themeVariable('primaryColor'), borderRadius: themeVariable('radius'), margin: '5vw', padding: '10px', color: 'white'}})('Animated Component'),
				]),
			]),
			View({content: 'stretch-stretch', style: sourceCodeStyle, expand: 1})([
				Pre()("Input({type: 'color',  onInput: update('color')})"),
			]),
		]),
		View({style: unitStyle, content: 'column center-stretch', expand: 1, key: 'unit8'})([
			Text()([Strong()('Unit Test 8: '), 'Local Storage']),
			View({style: demoStyle, content: 'stretch-space', expand: 1})([
				View({style: inputStyle, content: 'column space-center'})([
					Text()('User Name'),
					Input({type: 'text',  inlineStyle: {width: '180px'}, value: read('appName') != null ? read('appName') : 'oneJS', onInput: update('appName')}),
					Text()('Dark Theme'),
					Input({type: 'checkbox', checked: (read('appFlavor') && read('appFlavor') === 'dark' ? true : false), 
						onChange: e => update('appFlavor')(e.target.checked ? 'dark' : 'default')}),
					Button({inlineStyle: {width: '100%'}, flavor: 'danger', 
						onClick: (e) => {remove('appName');remove('appFlavor')}})('Delete Settings '),					
				]),
				View({style: resultStyle, content: 'column space-center', expand: 1})([
					Text()('Result:'),
					View({content: 'column center-center', expand: 1, flavor: read('appFlavor'), style: samplePageStyle})([
						Text({inlineStyle: {fontSize: '110%'}})('Username: ' + read('appName')), 
						Text({inlineStyle: {fontSize: '110%'}})('Theme: ' + read('appFlavor')), 						
						Text({inlineStyle: {fontStyle: 'italic', color: '#aaa'}})('Refresh to check persistance'), 
					]),
				]),
			]),
			View({content: 'stretch-stretch', style: sourceCodeStyle, expand: 1})([
				Pre()("Input({type: 'color',  onInput: update('color')})"),
			]),
		]),
		View({style: unitStyle, content: 'column stretch-stretch', expand: 1, key: 'unit9'})([
			Text()([Strong()('Unit Test 9: '), 'Indexed DB']),
			// Text()('Test Inputs and how they update the state'),
			View({style: demoStyle, content: 'stretch-center', expand: 1})([
				View({style: inputStyle, content: 'column space-center'})([
					Text()('Select List Type'),
					Input({type: 'select',  inlineStyle: {width: '100%'}, onInput: update('listType'), options: ['Test', 'Groceries', 'Movies', 'TODOs', 'Destinations']}),
					Text()('Type your item'),
					Input({type: 'text', inlineStyle: {width: '200px', marginBottom: '10px'}, value: read('listItemInput'), onInput: update('listItemInput')}),					
					Button({inlineStyle: {width: '100%'}, onClick: (e) => {add('listItems')({item: read('listItemInput'), done: false});}})('Save your item'),
				]),
				View({style: resultStyle, content: 'column space-center', expand: 1})([
					Text()('Result: '),
					View({content: 'column space-center', expand: 1, style: listStyle, wrap: false})([
						View({inlineStyle: {marginBottom: '5px'}})(Strong()(read('listType'))),
						View({style: listItemContainer, content: 'column top-stretch', wrap: false})([
							Array.isArray(read('listItems')) ? read('listItems').map((value, index) => View({key: index, content: 'center-space', expand: 1, style: listItemStyle,
								onClick: (e)=>{update('selectedListItemId')(value.id)}})([
								// value.item ? value.item.toString() : null,
								Text({inlineStyle: {textDecoration: value.done ? 'line-through' : 'none'}})(value.item ? value.item.toString() : value.toString()), 
								View({visible: value.id === read('selectedListItemId') ? true : false, animation: {visible: ['expand', 'disappear']}})([									
									Icon({icon: 'iosCheckmark', size: 'small', circled: true, flavor: value.done ? 'default' : 'disabled', 
										onClick: (e)=>{update('listItems', value.id)({...value, done: !value.done})}}),
									Icon({icon: 'iosTrash', size: 'small', circled: true, flavor: 'danger', 
										onClick: (e)=>{remove('listItems', value.id)}}),								
								])
							])) : [] ]),
						Button({flavor: 'danger', onClick: (e)=>{remove('listItems')}})('Clear all')
					]),					

				]),
			]),
			View({content: 'stretch-stretch', style: sourceCodeStyle, expand: 1})([
				Pre()("Input({type: 'color',  onInput: update('color')})"),
			]),
		]),
		View({style: unitStyle, content: 'column stretch-stretch', expand: 1, key: 'unit10'})([
			Text()([Strong()('Unit Test 10: '), 'Firebase Firestore']),
			// Text()('Test Inputs and how they update the state'),
			View({style: demoStyle, content: 'stretch-center', expand: 1})([
				View({style: inputStyle, content: 'column space-center'})([
					Text()('Select List Type'),
					Input({type: 'select',  inlineStyle: {width: '100%'}, onInput: update('listType2'), options: ['Test', 'Groceries', 'Movies', 'TODOs', 'Destinations']}),
					Text()('Type your item'),
					Input({type: 'text', inlineStyle: {width: '200px', marginBottom: '10px'}, value: read('listItemInput2'), onInput: update('listItemInput2')}),					
					Button({inlineStyle: {width: '100%'}, onClick: (e) => {add('listItems2')({item: read('listItemInput2'), done: false});}})('Save your item'),
				]),
				View({style: resultStyle, content: 'column space-center', expand: 1})([
					Text()('Result: '),
					View({content: 'column space-center', expand: 1, style: listStyle, wrap: false})([
						View({inlineStyle: {marginBottom: '5px'}})(Strong()(read('listType2'))),
						View({style: listItemContainer, content: 'column top-stretch', wrap: false})([
							Array.isArray(read('listItems2')) ? read('listItems2').map((value, index) => View({key: index, content: 'center-space', expand: 1, style: listItemStyle,
								onClick: (e)=>{update('selectedListItemId2')(value.id)}})([								
								Text({inlineStyle: {textDecoration: value.done ? 'line-through' : 'none'}})(value.item ? value.item.toString() : value.toString()), 
								View({visible: value.id === read('selectedListItemId2') ? true : false, animation: {visible: ['expand', 'disappear']}})([									
									Icon({key: 'done', icon: 'iosCheckmark', size: 'small', circled: true, flavor: value.done ? 'default' : 'disabled', 
										onClick: (e)=>{update('listItems2', value.id)({...value, done: !value.done})}}),
									Icon({key: 'remove', icon: 'iosTrash', size: 'small', circled: true, flavor: 'danger', 
										onClick: (e)=>{remove('listItems2', value.id)}}),								
								])
							])) : [] ]),
						Button({flavor: 'danger', onClick: (e)=>{remove('listItems2')}})('Clear all')
					]),					

				]),
			]),
			View({content: 'stretch-stretch', style: sourceCodeStyle, expand: 1})([
				Pre()("Input({type: 'color',  onInput: update('color')})"),
			]),
		]),
		

		// View()([Text()(read('selectedEvent').name), Text()(read('selectedEvent').time)]),
		// View()('martin'),
		// BaseWrapper('p')()('Static Content'),
		// BaseComponent('input')({type: 'text', onInput: update('name')}),
		// BaseComponent('input')({type: 'calendar', onInput: update('date'), key: 'b'}),
		// BaseComponent('input')({type: 'time', onInput: update('time'), key: 'c', className: ['a', 'b', 'c']}),
		// BaseWrapper('p')({name: 'alex', style: {color: read('name'), id: 'other'}, key: 'd'})(read('name')),
		// BaseWrapper('p')({theme: ['outline', 'shadow']})(read('name')),
		// React.createElement('div', {dangerouslySetInnerHTML:{__html: '<strong>strong text</strong>'}}),
		// React.createElement(React.Fragment, null, `<h1>Alex Martin</h1>`),
		// Div()('somethin Fancy'),
		// Icon({theme: ['outline', 'shadow'], circled: true, style: {id: 'myStyle', fill: 'pink'}, url: {active: '/public'}, name: 'iosGlobe', size: 32}),
		// // Component('input')({value: read('openModal'), checked: read('openModal'), type: 'checkbox', onInput: update('openModal')}),
		// //We cannot use onCreate function inside view because overrides the url behaviour
		// View({visible: read('name'), expand: 1, style: {background: 'coral'}})('Do I flicker'),
		// View({animation: {active: 'fade-in', 'not-active': 'horizontal-expand'}, style: {background: 'lightblue'}, url: {active: '/home2', link: 'home1'}, active: read('view1'), onActiveChange: update('view1')})('hello Alex: ' + read('openModal')),
		// // View({visible: read('openModal'), onVisibleChange: update('openModal'), expand: 1, style: {background: 'pink'}, url: {visible: '/home1', link: 'home2'}})('hello Alex'),
		// View({onCreate:()=>{console.log('onCreate!!')}, visible: read('openModal'), onVisibleChange: update('openModal'), expand: 1, style: {background: 'pink'}, url: {visible: '/home1', link: 'home2'}})('hello Alex'),
		// // Calendar({value: read('calendarDate'), onChange: update('calendarDate')})(),
		// // Modal({visible: read('openModal'), size: 'large', backdrop: false, onClose: update('openModal'), header: 'This is my title', footer: [Button()('accept'), Button()('reject')]})('modal' + read('openModal'))
	];
	return myTemplate;
};
 //ReactDOM.render(React.createElement(template(), {state: state, template: template}, null), document.getElementById('myApp'));
const template2 = () => [
	View({visible: read('modalVisible')})([
		Input({type: 'text', onInput: update('name')}),
		Input({type: 'calendar', onInput: update('date')}),
		Input({type: 'time', onInput: update('time')}),
		Button({onClick: ()=> {add('events', {name: read('name'), date: read('date'), time: read('time')})}})('save')
	]),
	View({visible: read('modalVisible')})([
		Input({type: 'text', onInput: update('name')}),
		Input({type: 'calendar', onInput: update('date')}),
		Input({type: 'time', onInput: update('time')}),
		Button({onClick: ()=> {add('events', {name: read('name'), date: read('date'), time: read('time')})}})('save')
	]),
	Input({type: 'text', onInput: update('name')}),
		Input({type: 'calendar', onInput: update('date')}),
		Input({type: 'time', onInput: update('time')}),
		Button({onClick: ()=> {add('events', {name: read('name'), date: read('date'), time: read('time')})}})('save')
];

app({template: template, state: state, theme: theme, text: text, firestore:firestoreDB}); //Would be best app({props})(template)

// console.log('my app: ' + ONEJS)

// const googleSignIn = () => {
// 	let provider = new firebase.auth.GoogleAuthProvider();
// 	//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// 	provider.addScope('https://www.googleapis.com/auth/calendar'); //manage calendars
// 	firebase.auth().signInWithPopup(provider).then((result) => {
// 	  // This gives you a Google Access Token. You can use it to access the Google API.
// 	  var token = result.credential.accessToken;
// 	  // The signed-in user info.
// 	  var user = result.user;
// 	  console.log(result);
// 	  // ...
// 	});
// }
// const shareEvent = async () => {
// 	//First copy event to clipboard: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_copy_clipboard
// 	let  copyText = 'https://www.mindpost.com/events' + read('eventId');
//   copyText.select();
//   copyText.setSelectionRange(0, 99999);
//   document.execCommand("copy"); //copies to clipboard. Display a tooltip at a fixed position saying "copied to clipboard. or Event copied, share it in any app!"
//   //Use mobile device share functionality
//   try {
//     await navigator.share(shareData)
//   } catch(error) {
//     console.log('Error: ' + error);
//   }
//   console.log('Data share successfully');
// }

// const menuStyle = {zIndex: 4, position: 'fixed', width: '100%', height: 60, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.85)'};
// let optionArray = ['Volvo', 'Mercedes', 'Rolex', 'Cartier'];
// let optionObject = {cars: {volvo: 'Volvo', mercedes: 'Mercedes'}, watches: {rolex: 'Rolex', cartier: 'Cartier'}, pens: 'Bic', stars: 'Sun'};

// const template = () => [//a more functional practice would be to make it take state and read would be state('varname')
// 	View({content: 'center-distribute', style: menuStyle})([
// 		View({content: 'column center-center', url: {link: '/settings'}})([Icon({url: {active: '/settings'}, name: 'iosSettings', size: 32}), readText('settings')]), 
// 		View({content: 'column center-center', url: {link: '/home'}})([Icon({url: {active: '/home'}, name: 'iosHome', size: 32}), 'home']), 
// 		View({content: 'column center-center', url: {link: '/public'}})([Icon({url: {active: '/public'}, name: 'iosGlobe', size: 32}), 'public'])]),
// 	View({style: {position: 'relative', flex: 1, minHeight: '100vh', backgroundColor: '#f1f1f1'}})([
// 		View({url: {visible:'/settings'}, style: {position: 'absolute', top: 0, left: 0, paddingTop: 80}})(
// 			'This is the settings page',
// 			Input({type: 'select', options: ['spanish', 'english', 'french']})
// 		),
// 		View({url: {visible:'/home'}, style: {position: 'absolute', top: 0, left: 0, paddingTop: 80, paddingBottom: 100}})([
// 			View({content: 'center-center', style: [menuStyle, {bottom: 0, left: 0}]})(Button({onclick: ()=> {write('modalVisible', true)}})('New Event')),
// 			View({content: 'column'})([(read('events')).map((item)=>View({url: {link: '/events/' + item.id}})([item.name]))]),
// 			View({visible: read('modalVisible')})([
// 				Input({type: 'text', oninput: update('name')}),
// 				Input({type: 'calendar', oninput: update('date')}),
// 				Input({type: 'time', oninput: update('time')}),
// 				Button({onclick: ()=> {add('events', {name: read('name'), date: read('date'), time: read('time')})}})('save')
// 			]),
// 			// View({content: 'column'})([(inputTypes).map((type)=>Input({type: type, placeholder: 'Input something'}))]),
// 			Input2({type: 'textarea'}),
// 			Input2({type: 'select', options: optionArray}),
// 			testComponent,
// 			Input2({type: 'select', options: optionObject}),
// 			Calendar({value: read('calendarDate'), onChange: update('calendarDate')})(),
// 			// window.useComponent['Calendar']({value: read('calendarDate'), onChange: update('calendarDate')})(),
// 			Slider({value: read('slide'), onChange: update('slide'), direction: 'column', scroll: true, style: {backgroundColor: 'pink', height: 300}})([Input(), Input(), Button()('my button')]),
// 			Input2({type: 'range', value: read('range'), oninput: update('range'), min: -30, max: 10}),
// 			Modal({visible: read('openModal'), size: 'large', onclose: update('openModal'), header: 'This is my title', footer: [Button()('accept'), Button()('reject')]})(Slider({value: read('slide2'), onChange: update('slide2'), id: 'slider', content: 'row', style: {backgroundColor: 'pink', width: '100%'}})([Input(), Input(), Button()('my button')])),
// 			Input({value: read('openModal'), checked: read('openModal'), type: 'checkbox', oninput: update('openModal')}),
// 			Input({type: 'text'}),
// 			myComp({id:'abcd', style: {backgroundColor: 'pink'}, init1: 1, init2: 2, prop1: read('range'), prop2: read('range')})('Alex'),
// 			// jsToHtml('p')({id: 'Alex', class: ['martin', 'turrillas'], style: {backgroundColor: 'blue'}, visible: true, other: 'alex', onClick: 'mike'})('myname is alex'),
// 			// myComp({prop1: 3, prop2: 5}),
// 		]),	
// 		View({id: 'compTest'})(),
// 		View({url: {visible:'/public'}, style: {position: 'absolute', top: 0, left: 0, paddingTop: 80}})('This is the public page'),
// 		View({url: {visible:'/events/*'}})([P()(read('selectedEvent').name), P()(read('selectedEvent').time)]),
// 		Button({onclick: shareEvent})('Share event and copy to clipboard'), html`${unsafeStatic(`<p>My name is Alex</p>`)}`
// 	]),
	
// ]; 

// app({template: template, state: state, text: text});
// console.log(testComponent);
 
// firebase.auth().onAuthStateChanged((user) => {
//     if(user) {
//     	console.log(user)
//     // this.user = user;
//     // this.email = user.email;
//     // this.username = user.displayName;
//     // this.userId = user.uid;
//     // let userPath = 'users/' + this.userId;
//     write('user', user);
//     // this.getOnline(userPath).then((doc) => {
//     //     if(doc) {
//     //         this.syncFieldOnline(userPath, 'events');
//     //     }
//     //     else {
//     //         let userData = {
//     //             name: displayName,
//     //             email: email,
//     //             events: []
//     //         };
//     //         this.setOnline(userPath, userData);
//     //     }
//     // });
//   } 
//   else write('user', undefined);
//   //else this.user = undefined;
// });
