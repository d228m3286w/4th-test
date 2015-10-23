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


        var students = this.props.data.items.map(function(u){
            return (
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                            <h3 className="panel-title"></h3>
                        </div>
                    <div className="panel-body">
                        <p>{u.Name}</p>
                        <p>{u.Email}</p>
                        <p>{u.gpa}</p>
                  </div>
                </div>
            </div>
            )
        });
        return (
				<div>
				    <h4>Title</h4>
                        <div>
                            {students}
                        </div>
				</div>
        	);
    }
});


var StudentBox = React.createClass({
//

    render: function() {
        return (
                <div>
                    <ul>
                        <StudentPanels data={DATA}/>
                    </ul>
                </div>
        );
    }
});

React.render(<StudentBox url="/api/index/"/>, document.body)


