from setuptools import setup
import os

def get_requirements():
    with open(os.path.join(os.path.join(os.dirname(__file__), 'requirements.txt')), 'r') as f:
        lines = f.readlines()
        return lines

setup(
   name='App Name',
   version='1.0',
   description='App description',
   author='Author',
   author_email='foomail@foo.com',
   install_requires=get_requirements()
)
