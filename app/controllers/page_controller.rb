class PageController < ApplicationController

    def index
        requete = "TRUE"
        if params.has_key?(:com)
            requete += " AND insee_com = #{params[:com]}"
        end
        if params.has_key?(:dept)
            requete += " AND insee_dep = #{params[:dept]}"
        end
        if params.has_key?(:reg)
            requete += " AND insee_reg = #{params[:reg]}"
        end
        @scorescommunes = Scorecommune.where(requete).page(params[:page]).per(200)
    end
end
