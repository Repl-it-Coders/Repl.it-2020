from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, RadioField
from wtforms.validators import DataRequired

class post:
	name = StringField('Username:', validators=[DataRequired()])
	content = StringField('Post:', validators=[DataRequired()])
	submit = SubmitField('Post!')
