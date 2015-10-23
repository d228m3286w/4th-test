var DATA = {
  title: 'University of Montana: Student Directory',
  items: [
    { id: 1, name: 'John', email: 'John@u.mt.com', gpa: 4.0 },
    { id: 2, name: 'Sarah', email: 'Sarah@u.mt.com', gpa: 3.0 },
    { id: 3, name: 'Paul', email: 'Paul@u.mt.com', gpa: 2.7 },
    { id: 4, name: 'Emily', email: 'Emily@u.mt.com', gpa: 2.6 },
    { id: 5, name: 'Derek', email: 'Derek@u.mt.com', gpa: 3.8 },
    { id: 6, name: 'Kathy', email: 'Kathy@u.mt.com', gpa: 3.9 },
    { id: 7, name: 'Brina', email: 'Brina@u.mt.com', gpa: 2.7 },
    { id: 8, name: 'Clare', email: 'Clare@u.mt.com', gpa: 3.6 },
    { id: 9, name: 'Mike', email: 'Mike@u.mt.com', gpa: 2.0 },
  ]
};

var StudentPanels = React.createClass({
    render: function() {
        var students = this.props.DATA.items.map(function(u){
            return (
                <div>
                    <div colSpan="4"> 
                        <p> {u.name} </p>
                        <p> {u.email} </p>
                        <p> {u.gpa} </p>
                    </div>
                </div>
            )
        });
        return (
				<div>
				    <h4>Title</h4>
                        <li>
                            {students}
                        </li>
				</div>
        	);
    }
});


var StudentBox = React.createClass({
//             getInitialState: function(){
//             return {data: []}
//         },
//     loadPepsFromServer: function() {
        
//         $.ajax({
//             url: this.props.url,
//             dataType: 'json',
//             cache:false,
//             success:function(data){
//                 console.log("inside success" + JSON.stringify(data[0]))
//                 this.setState({data:data});
//             }.bind(this),
//             error: function(xhr,status, err){
//                 console.log("broken url is " + this.props.url)
//                 console.error(this.props.url, status,err.toString());
//             }.bind(this)
//         });
//     },

    
// componentDidMount: function() {
//     this.loadPepsFromServer();
// },

    render: function() {
        return (
                <div>
                    <ul>
                        <StudentPanels students={DATA}/>
                    </ul>
                </div>
        );
    }
});

React.render(<StudentBox url="/api/index/"/>, document.body)


