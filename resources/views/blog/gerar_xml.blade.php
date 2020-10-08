<?php

	$json_file = file_get_contents("artigos.json");
    $itens = json_decode($json_file);


    // $itens = (object) $json_file;
    // echo '<pre>';
    //    var_dump( $itens[2]->data);
    // echo '<pre>';   
echo '
    <?xml version="1.0" encoding="UTF-8" ?>
        
    <rss version="2.0"
    xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:wfw="http://wellformedweb.org/CommentAPI/"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:wp="http://wordpress.org/export/1.2/">
    <channel>
        <title>Blog | Gestão Click</title>
        <link>https://gestaoclick.com.br/</link>
        <description>Notícias e informações sobre gestão financeira, gestão de empresas, vendas e NF-e</description>
        <pubDate>Tue, 16 Jun 2020 17:03:44 +0000</pubDate>
        <language>pt-BR</language>
        <wp:wxr_version>1.2</wp:wxr_version>
        <wp:base_site_url>https://gestaoclick.com.br</wp:base_site_url>
        <wp:base_blog_url>https://blog.gestaoclick.com.br</wp:base_blog_url>
    
        <wp:author><wp:author_id>1</wp:author_id><wp:author_login><![CDATA[marketing@gestaoclick.com.br]]></wp:author_login><wp:author_email><![CDATA[marketing@gestaoclick.com.br]]></wp:author_email><wp:author_display_name><![CDATA[marketing@gestaoclick.com.br]]></wp:author_display_name><wp:author_first_name><![CDATA[]]></wp:author_first_name><wp:author_last_name><![CDATA[]]></wp:author_last_name></wp:author>
        <wp:author><wp:author_id>3</wp:author_id><wp:author_login><![CDATA[Super Atualizado]]></wp:author_login><wp:author_email><![CDATA[contato@superatualizado.com.br]]></wp:author_email><wp:author_display_name><![CDATA[Super Atualizado]]></wp:author_display_name><wp:author_first_name><![CDATA[Super Atualizado]]></wp:author_first_name><wp:author_last_name><![CDATA[]]></wp:author_last_name></wp:author>
        <wp:author><wp:author_id>2</wp:author_id><wp:author_login><![CDATA[Autor Convidado]]></wp:author_login><wp:author_email><![CDATA[gabriela@gestaoclick.com.br]]></wp:author_email><wp:author_display_name><![CDATA[Autor Convidado]]></wp:author_display_name><wp:author_first_name><![CDATA[]]></wp:author_first_name><wp:author_last_name><![CDATA[]]></wp:author_last_name></wp:author>
    
        <generator>https://wordpress.org/?v=5.3.4</generator>
'
;
    
        foreach ( $itens[2]->data as $artigo ) 
        {
    
        if ($artigo->tipo == "BL"){
           
            switch ($artigo->categoria_id) {
              case 1:
                $categoria = "Controle Financeiro";
                $categoria_id = "controle-financeiro";
                    break;
              case 2:
                $categoria = "Controle de Estoque";
                $categoria_id = "controle-estoque";
                    break;
              case 3:
                $categoria = "Controle Fiscal";
                $categoria_id = "controle-fiscal";
                    break;
              case 4:
                $categoria = "Gestão de Negócios";
                $categoria_id = "gestao-negocios";
                    break;
              case 5:
                $categoria = "Novidades GestãoCLick";
                $categoria_id = "novidades-gestaoclick";
                    break;
              case 6:
                $categoria = "Tecnologia Empresarial";
                $categoria_id = "tecnologia";
                    break;
                default:
                $categoria = "Sem Categoria" ;
                $categoria_id = "sem-categoria";
          }

        echo '
        
        <item>          
        <title>'.$artigo->chamada.'</title>
        <link>https://gestaoclick.com.br/'.$artigo->url.'/</link>
        <pubDate>'.($artigo->cadastrado_em != "0000-00-00 00:00:00" ? $artigo->cadastrado_em : $artigo->modificado_em  ).'</pubDate>
        <dc:creator><![CDATA[marketing@gestaoclick.com.br]]></dc:creator>
        <guid isPermaLink="false">https://gestaoclick.com.br/blog/'.$artigo->url.'/</guid>
        <description></description>
        <content:encoded><![CDATA[<!-- wp:tadv/classic-paragraph -->
        <img src="'.$artigo->imagem.'" alt="'.$artigo->chamada.'" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
        '.$artigo->descricao.'
        <!-- /wp:tadv/classic-paragraph -->]]>
        </content:encoded>
        <excerpt:encoded><![CDATA[]]></excerpt:encoded>
        <wp:post_id>'.$artigo->id.'</wp:post_id>
        <wp:post_date><![CDATA['.($artigo->cadastrado_em != "0000-00-00 00:00:00" ? $artigo->cadastrado_em : $artigo->modificado_em  ).']]></wp:post_date>
        <wp:post_date_gmt><![CDATA['.($artigo->cadastrado_em != "0000-00-00 00:00:00" ? $artigo->cadastrado_em : $artigo->modificado_em  ).']]></wp:post_date_gmt>
        <wp:comment_status><![CDATA[open]]></wp:comment_status>
        <wp:ping_status><![CDATA[open]]></wp:ping_status>
        <wp:post_name><![CDATA['.$artigo->url.']]></wp:post_name>
        <wp:status><![CDATA[publish]]></wp:status>
        <wp:post_parent>0</wp:post_parent>
        <wp:menu_order>0</wp:menu_order>
        <wp:post_type><![CDATA[post]]></wp:post_type>
        <wp:post_password><![CDATA[]]></wp:post_password>
        <wp:is_sticky>0</wp:is_sticky>
            <category domain="category" nicename="'.$categoria_id.'"><![CDATA['.$categoria.']]></category>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_facebook_shares]]></wp:meta_key>
            <wp:meta_value><![CDATA[0]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_google_plus_shares]]></wp:meta_key>
            <wp:meta_value><![CDATA[0]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[swp_cache_timestamp]]></wp:meta_key>
            <wp:meta_value><![CDATA[442301]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_thumbnail_id]]></wp:meta_key>
            <wp:meta_value><![CDATA[5144]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_edit_last]]></wp:meta_key>
            <wp:meta_value><![CDATA[1]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[supermag_sidebar_layout]]></wp:meta_key>
            <wp:meta_value><![CDATA[default-sidebar]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_yoast_wpseo_focuskw]]></wp:meta_key>
            <wp:meta_value><![CDATA[ambiente de trabalho]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_yoast_wpseo_title]]></wp:meta_key>
            <wp:meta_value><![CDATA['.$artigo->meta_tags.']]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_yoast_wpseo_metadesc]]></wp:meta_key>
            <wp:meta_value><![CDATA['.$artigo->meta_descricao.']]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_yoast_wpseo_linkdex]]></wp:meta_key>
            <wp:meta_value><![CDATA[69]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_yoast_wpseo_content_score]]></wp:meta_key>
            <wp:meta_value><![CDATA[60]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_wp_old_date]]></wp:meta_key>
            <wp:meta_value><![CDATA[2020-05-27]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_pinterest_shares]]></wp:meta_key>
            <wp:meta_value><![CDATA[0]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_twitter_shares]]></wp:meta_key>
            <wp:meta_value><![CDATA[0]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_linkedin_shares]]></wp:meta_key>
            <wp:meta_value><![CDATA[0]]></wp:meta_value>
        </wp:postmeta>
        <wp:postmeta>
            <wp:meta_key><![CDATA[_total_shares]]></wp:meta_key>
            <wp:meta_value><![CDATA[0]]></wp:meta_value>
        </wp:postmeta>
    </item>
       ';
            }
        
    }

    echo '
    </channel>
</rss>
    '
?>
