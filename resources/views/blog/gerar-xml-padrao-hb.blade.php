<?php
	$json_file = file_get_contents("artigos.json");
    $itens = json_decode($json_file);
?>
 <rss xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">
    <channel>
		<title>GestãoClick</title>
		<link>https://blog.gestaoclick.com.br</link>
		<description/>
		<language>pt-br</language>
		<pubDate>Mon, 28 Sep 2020 14:59:31 GMT</pubDate>
		<dc:date>2020-09-28T14:59:31Z</dc:date>
		<dc:language>pt-br</dc:language>
 <?php foreach ( $itens[2]->data as $artigo ){
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
 
  ?>
       

        <item>
            <title><?=$artigo->chamada?></title>
            <link>https://gestaoclick.com.br/<?=$artigo->url?></link>
            <description>
            <div class="hs-featured-image-wrapper"> 
                <a href="https://gestaoclick.com.br/<?=$artigo->url?>" title="<?=$artigo->chamada?>" class="hs-featured-image-link">
                    <img src="<?=$artigo->imagem?>" alt="<?=$artigo->chamada?>" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> 
                </a> 
            </div>
            </description>
            <content:encoded>
                <div class="hs-featured-image-wrapper"> 
                <a href="https://gestaoclick.com.br/<?=$artigo->url?>" title="" class="hs-featured-image-link">
                    <img src="<?=$artigo->imagem?>" alt="<?=$artigo->chamada?>" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> 
                </a> 
                </div> 
                <img src="<?=$artigo->imagem?>" alt="<?=$artigo->chamada?>" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
            </content:encoded>
            <category><?=$categoria?></category>
            <pubDate><?php ($artigo->cadastrado_em != "0000-00-00 00:00:00" ? $artigo->cadastrado_em : $artigo->modificado_em  )?></pubDate>
            <author>marketing@gestaoclick.com.br</author>
            <guid>https://gestaoclick.com.br/<?=$artigo->url?>" title="<?=$artigo->chamada?></guid>
            <dc:date><?= $artigo->modificado_em ?></dc:date>
        </item>

<?php } } ?>
    </channel>
    </rss>
