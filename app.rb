require 'sinatra'
require 'erb'

class App < Sinatra::Base
  get '/' do
    erb :"index.html"
  end

  put '/' do
  end
end
