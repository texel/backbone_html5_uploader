require 'sinatra'
require 'erb'

class App < Sinatra::Application
  get '/' do
    erb :"index.html"
  end

  put '/' do
  end
end
