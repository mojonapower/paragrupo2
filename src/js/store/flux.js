const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loged:false,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			anfitriones: [
				{
					nombre:'macarena',
					mail: 'maca95@gmail.com',
					telefono: '+569 xxx xxx xxx',
					estancias: [{lugar:'casa bonita', ubicacion:'playa 2020', foto: 'https://t2.pb.ltmcdn.com/es/posts/4/5/8/que_significa_sonar_con_la_playa_5854_600.jpg'},
					{lugar:'casa bonita', ubicacion:'playa 22020', foto: 'https://static.wikia.nocookie.net/reinoanimalia/images/d/da/Playas.png/revision/latest?cb=20150820081836&path-prefix=es'},
					{lugar:'casa fea', ubicacion:'playa 233340', foto: 'https://trucoslondres.com/wp-content/uploads/2017/05/playa.jpg'},
					{lugar:'casa muy fea', ubicacion:'playa 202', foto:'https://www.semana.com/resizer/qs7Ug8L6hth4cUYJLepbWJUpI1c=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/TNGRKNPL55DKVPYG7VJ4WZLO3E.jpg'}]
				},
				{
					nombre:'ricardo',
					mail: 'ricardo@gmail.com',
					telefono: '+569 xxx xxx xxx',
					estancias: [{lugar:'casa bosque', ubicacion:'bosque 2020', foto: 'https://t2.pb.ltmcdn.com/es/posts/4/5/8/que_significa_sonar_con_la_playa_5854_600.jpg'},
					{lugar:'casa prado', ubicacion:'playa 22020', foto: 'https://static.wikia.nocookie.net/reinoanimalia/images/d/da/Playas.png/revision/latest?cb=20150820081836&path-prefix=es'},
					{lugar:'casa fea', ubicacion:'playa 233340', foto: 'https://trucoslondres.com/wp-content/uploads/2017/05/playa.jpg'},
					{lugar:'casa muy fea', ubicacion:'playa 202', foto:'https://www.semana.com/resizer/qs7Ug8L6hth4cUYJLepbWJUpI1c=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/TNGRKNPL55DKVPYG7VJ4WZLO3E.jpg'}]
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
