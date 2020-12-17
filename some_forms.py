from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, RadioField
from wtforms.validators import DataRequired

class post:
	name = StringField('Repl.it username:', validators=[Datarequired()])
	suggestion = StringField('Suggestion:', validators=[DataRequired()])
	submit = SubmitField('Post')
