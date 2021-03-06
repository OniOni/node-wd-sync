# assumes that selenium server is running

{wd,Wd}={}
try 
  {wd,Wd} = require 'wd-sync' 
catch err
  {wd,Wd} = require '../../index' 
  
# 4/ leaner Wd syntax

browser = wd.remote()

# do this only once
Wd = Wd with:browser 

Wd ->        
  @init browserName:'firefox'

  @get "http://google.com"
  console.log @title()          
  queryField = @elementByName 'q'

  @type queryField, "Hello World"  
  @type queryField, "\n"

  @setWaitTimeout 3000      
  @elementByCss '#ires' # waiting for new page to load
  console.log @title()

  @quit()
